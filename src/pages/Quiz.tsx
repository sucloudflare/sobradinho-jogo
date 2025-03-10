import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: 'Em que ano foi inaugurada a Barragem de Sobradinho?',
      options: ['1975', '1976', '1977', '1978'],
      correctAnswer: 3
    },
    {
      id: 2,
      question: 'Qual é a capacidade do reservatório da Barragem de Sobradinho?',
      options: ['18 bi m³', '28 bi m³', '38 bi m³', '48 bi m³'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'Em que ano Sobradinho se tornou município?',
      options: ['1987', '1988', '1989', '1990'],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quiz de Sobradinho
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Teste seus conhecimentos sobre nossa cidade!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <HelpCircle className="w-8 h-8 text-sky-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Questão {currentQuestion + 1} de {questions.length}
                </h2>
              </div>

              <p className="text-lg text-gray-800 mb-8">
                {questions[currentQuestion].question}
              </p>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-xl text-left transition-colors ${
                      selectedAnswer === null
                        ? 'hover:bg-sky-50 bg-gray-50'
                        : index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-100 text-green-800'
                        : selectedAnswer === index
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Resultado Final
              </h2>
              <div className="text-6xl font-bold text-sky-600 mb-4">
                {((score / questions.length) * 100).toFixed(0)}%
              </div>
              <p className="text-gray-600 mb-8">
                Você acertou {score} de {questions.length} questões!
              </p>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Tentar Novamente
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}