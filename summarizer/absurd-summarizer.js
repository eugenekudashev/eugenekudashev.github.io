"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var textarea_1 = require("@/components/ui/textarea");
var lucide_react_1 = require("lucide-react");
var AbsurdSummarizer = function () {
    // Our curated list of absurd words
    var absurdWords = [
        "XIJALEMENDO", "PLONK", "ZAZZLE", "SQUONK", "BINGLE",
        "WOOSH", "KERFLE", "ZWIBBLE", "SPLUNGE", "THWACK",
        "QUORPLE", "FLUMPH", "ZINGLE", "BONK", "WHIFFLE",
        "CRUNCH", "SPAZZLE", "GLORP", "TWIZZLE", "PLIMPT",
        "SNORGLE", "SPORK", "KAZOO", "WOBBLE"
    ];
    var _a = (0, react_1.useState)(''), inputText = _a[0], setInputText = _a[1];
    var _b = (0, react_1.useState)(''), result = _b[0], setResult = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = (0, react_1.useState)(''), fileName = _d[0], setFileName = _d[1];
    var handleFileUpload = function (event) {
        var file = event.target.files[0];
        if (!file)
            return;
        setFileName(file.name);
        setIsLoading(true);
        var reader = new FileReader();
        reader.onload = function (e) {
            setInputText(e.target.result);
            setIsLoading(false);
        };
        reader.onerror = function () {
            setIsLoading(false);
            alert('Error reading file');
        };
        // Handle different file types
        if (file.type === 'text/plain' || file.type === 'application/pdf' ||
            file.type === 'application/msword' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            reader.readAsText(file);
        }
        else {
            alert('Please upload a text, PDF, or Word document');
            setFileName('');
            setIsLoading(false);
        }
    };
    var handleSummarize = function () {
        if (!inputText.trim())
            return;
        setIsLoading(true);
        // Simulate "processing" time for comedic effect
        setTimeout(function () {
            var randomWord = absurdWords[Math.floor(Math.random() * absurdWords.length)];
            setResult(randomWord);
            setIsLoading(false);
        }, 1500);
    };
    return (<card_1.Card className="w-full max-w-2xl mx-auto">
      <card_1.CardHeader>
        <card_1.CardTitle className="text-center text-2xl font-bold">
          The Ultimate Text Summarizer™
        </card_1.CardTitle>
      </card_1.CardHeader>
      <card_1.CardContent className="space-y-4">
        <div className="text-center text-sm text-gray-500 mb-4">
          Finally, summarize ANY text into just ONE word!
        </div>
        
        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input type="file" id="file-upload" className="hidden" accept=".txt,.pdf,.doc,.docx" onChange={handleFileUpload}/>
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
            <lucide_react_1.Upload className="h-8 w-8 text-gray-400"/>
            <span className="text-sm text-gray-500">
              Drop your file here or click to upload
            </span>
            <span className="text-xs text-gray-400">
              Supports: TXT, PDF, DOC, DOCX
            </span>
          </label>
          {fileName && (<div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
              <lucide_react_1.FileText className="h-4 w-4"/>
              {fileName}
            </div>)}
        </div>

        <div className="text-center text-sm text-gray-500">
          Or paste your text directly:
        </div>
        
        <textarea_1.Textarea placeholder="Paste your text here (minimum 10 characters)" className="min-h-32 mb-4" value={inputText} onChange={function (e) { return setInputText(e.target.value); }}/>
        
        <div className="flex justify-center">
          <button_1.Button onClick={handleSummarize} disabled={inputText.length < 10 || isLoading} className="w-40">
            {isLoading ? "Analyzing..." : "Summarize!"}
          </button_1.Button>
        </div>

        {result && (<div className="mt-8 text-center">
            <div className="text-sm text-gray-500 mb-2">Your text summarized in one word:</div>
            <div className="text-4xl font-bold bg-blue-100 p-4 rounded-lg inline-block">
              {result}
            </div>
          </div>)}
      </card_1.CardContent>
    </card_1.Card>);
};
exports.default = AbsurdSummarizer;
