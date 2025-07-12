'use client'
import { useState } from 'react';
import axios from 'axios';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const page: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const checkFakeNews = async () => {
    setLoading(true);
    setResult('');
    try {
      const res = await axios.post('http://localhost:8000/check-news', { text });
      setResult(res.data.prediction);
    } catch (error) {
      setResult('❌ Error occurred while checking the news.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-2xl p-6 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">📰 Fake News Detector</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Paste news article here..."
            className="resize-none min-h-[150px]"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
          <Button
            className="w-full mt-4 cursor-pointer"
            onClick={checkFakeNews}
            disabled={loading || !text.trim()}
          >
            {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : "🔍 Check News"}
          </Button>
          {result !== '' && (
            <div className="mt-6 text-lg text-center">
              <span className={`font-bold ${result === "0" ? "text-red-600" : "text-green-600"}`}>
                {result === "0" ? "❌ Fake News" : "✅ Real News"}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
