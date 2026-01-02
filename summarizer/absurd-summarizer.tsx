import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Upload } from 'lucide-react';

const AbsurdSummarizer = () => {
  // Our curated list of absurd words
  const absurdWords = [
    "XIJALEMENDO", "PLONK", "ZAZZLE", "SQUONK", "BINGLE", 
    "WOOSH", "KERFLE", "ZWIBBLE", "SPLUNGE", "THWACK", 
    "QUORPLE", "FLUMPH", "ZINGLE", "BONK", "WHIFFLE", 
    "CRUNCH", "SPAZZLE", "GLORP", "TWIZZLE", "PLIMPT", 
    "SNORGLE", "SPORK", "KAZOO", "WOBBLE"
  ];

  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      setInputText(e.target.result);
      setIsLoading(false);
    };
    
    reader.onerror = () => {
      setIsLoading(false);
      alert('Error reading file');
    };

    // Handle different file types
    if (file.type === 'text/plain' || file.type === 'application/pdf' || 
        file.type === 'application/msword' || 
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      reader.readAsText(file);
    } else {
      alert('Please upload a text, PDF, or Word document');
      setFileName('');
      setIsLoading(false);
    }
  };

  const handleSummarize = () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate "processing" time for comedic effect
    setTimeout(() => {
      const randomWord = absurdWords[Math.floor(Math.random() * absurdWords.length)];
      setResult(randomWord);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          The Ultimate Text Summarizer™
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-sm text-gray-500 mb-4">
          Finally, summarize ANY text into just ONE word!
        </div>
        
        {/* File Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleFileUpload}
          />
          <label 
            htmlFor="file-upload" 
            className="cursor-pointer flex flex-col items-center gap-2"
          >
            <Upload className="h-8 w-8 text-gray-400" />
            <span className="text-sm text-gray-500">
              Drop your file here or click to upload
            </span>
            <span className="text-xs text-gray-400">
              Supports: TXT, PDF, DOC, DOCX
            </span>
          </label>
          {fileName && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              {fileName}
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">
          Or paste your text directly:
        </div>
        
        <Textarea
          placeholder="Paste your text here (minimum 10 characters)"
          className="min-h-32 mb-4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <div className="flex justify-center">
          <Button 
            onClick={handleSummarize}
            disabled={inputText.length < 10 || isLoading}
            className="w-40"
          >
            {isLoading ? "Analyzing..." : "Summarize!"}
          </Button>
        </div>

        {result && (
          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500 mb-2">Your text summarized in one word:</div>
            <div className="text-4xl font-bold bg-blue-100 p-4 rounded-lg inline-block">
              {result}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AbsurdSummarizer;
