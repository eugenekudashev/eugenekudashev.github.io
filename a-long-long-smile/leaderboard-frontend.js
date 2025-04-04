// Leaderboard frontend logic
$(document).ready(function () {
  // Configuration
  const API_URL = "https://a-long-long-smile.onrender.com/api"; // Update with your actual API URL

  // Function to load and display leaderboard scores
  function loadLeaderboard() {
    $.ajax({
      url: `${API_URL}/scores?limit=100`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        displayLeaderboard(data);
      },
      error: function (xhr, status, error) {
        console.error("Error fetching leaderboard:", error);
        $("#leaderboard-container").html(
          '<p class="error">Failed to load leaderboard. Please try again later.</p>',
        );
      },
    });
  }

  // Function to display leaderboard data
  function displayLeaderboard(scores) {
    if (!scores || scores.length === 0) {
      $("#leaderboard-container").html(
        "<p>No scores yet! Be the first to submit a score.</p>",
      );
      return;
    }

    let html = `
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
    `;

    scores.forEach((score, index) => {
      // Format date (assuming timestamp comes from server in ISO format)
      const scoreDate = new Date(score.timestamp);
      const formattedDate = scoreDate.toLocaleString();

      html += `
        <tr class="${index < 3 ? "top-score" : ""}">
          <td>${index + 1}</td>
          <td>${escapeHtml(score.name)}</td>
          <td>${score.score.toLocaleString()}</td>
          <td>${formattedDate}</td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    $("#leaderboard-container").html(html);
  }

  // Function to submit a new score
  function submitScore(playerName, score) {
    // Disable the submit button while processing
    $("#submit-score-btn").prop("disabled", true).text("Submitting...");

    // Create timestamp for verification (if using signature approach)
    const timestamp = Date.now();

    $.ajax({
      url: `${API_URL}/scores`,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        name: playerName,
        score: score,
        timestamp: timestamp,
        // If using the signature approach, you would add the signature here
        // signature: generatedSignature
      }),
      success: function (response) {
        showMessage("Score submitted successfully!", "success");
        loadLeaderboard(); // Reload the leaderboard to show the new score
        $("#player-name").val(""); // Clear the input field
        $("#player-score").val(""); // Clear the score field
      },
      error: function (xhr, status, error) {
        let errorMessage = "Failed to submit score";

        if (xhr.responseJSON && xhr.responseJSON.error) {
          errorMessage += `: ${xhr.responseJSON.error}`;
        } else if (xhr.responseJSON && xhr.responseJSON.errors) {
          errorMessage +=
            ": " + xhr.responseJSON.errors.map((e) => e.msg).join(", ");
        }

        showMessage(errorMessage, "error");
        console.error("Error submitting score:", xhr.responseJSON);
      },
      complete: function () {
        // Re-enable the submit button
        $("#submit-score-btn").prop("disabled", false).text("Submit Score");
      },
    });
  }

  // Helper function to show status messages
  function showMessage(message, type) {
    const messageEl = $("#status-message");
    messageEl.text(message).removeClass().addClass(`message ${type}`);

    // Hide the message after 5 seconds
    setTimeout(function () {
      messageEl.text("").removeClass();
    }, 5000);
  }

  // Helper function to escape HTML (prevent XSS)
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Event handler for score submission form
  $("#score-form").submit(function (event) {
    event.preventDefault();

    const playerName = $("#player-name").val().trim();
    const playerScore = parseFloat($("#player-score").val().trim());

    // Basic validation
    if (!playerName) {
      showMessage("Please enter your name", "error");
      return;
    }

    if (isNaN(playerScore) || playerScore < 0) {
      showMessage("Please enter a valid score (positive number)", "error");
      return;
    }

    submitScore(playerName, playerScore);
  });

  // Load the leaderboard when the page loads
  loadLeaderboard();

  // Optional: Add refresh button functionality
  $("#refresh-leaderboard").click(function () {
    $(this).addClass("spinning");
    loadLeaderboard();
    setTimeout(() => $(this).removeClass("spinning"), 1000);
  });
});
