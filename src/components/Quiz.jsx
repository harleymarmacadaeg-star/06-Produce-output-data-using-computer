import React, { useState } from 'react';
import { RefreshCcw, Award } from 'lucide-react';

const questions = [
  { q: "Which software is best used for calculating financial data?", options: ["MS Word", "MS Excel", "Notepad", "Paint"], correct: 1 },
  { q: "What does 'SOP' stand for?", options: ["Standard Operating Procedure", "System Of Processing", "Safe Output Print", "Software Operating Program"], correct: 0 },
  { q: "Which printer type uses toner powder?", options: ["Inkjet", "Dot Matrix", "Laser", "Plotter"], correct: 2 },
  { q: "Before physically removing a USB drive, you should always:", options: ["Pull it out quickly", "Turn off the computer", "Use the 'Eject' command", "Delete all files"], correct: 2 },
  { q: "Ctrl + P is the keyboard shortcut for:", options: ["Paste", "Process", "Print", "Play"], correct: 2 },
  { q: "Which of the following is an example of Cloud Storage?", options: ["Google Drive", "Flash Drive", "Hard Disk", "RAM"], correct: 0 },
  { q: "What feature should you check to save paper before printing?", options: ["Print Preview", "The Monitor Brand", "The Mouse Settings", "Internet Speed"], correct: 0 },
  { q: "Complete the flow: Input -> _______ -> Output", options: ["Storage", "Process", "Delete", "Print"], correct: 1 },
  { q: "Which printer is an 'Impact' printer used for carbon copies?", options: ["Laser", "Dot Matrix", "Inkjet", "Thermal"], correct: 1 },
  { q: "Which software is best for writing letters and reports?", options: ["MS Excel", "MS Word", "Calculator", "VLC Player"], correct: 1 },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    setIsAnswered(true);

    if (idx === questions[current].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setIsAnswered(false);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
    setIsAnswered(false);
  };

  if (finished) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl text-center border-4 border-indigo-600">
        <Award className="mx-auto text-yellow-500 mb-6 drop-shadow-md" size={80} />
        <h2 className="text-4xl font-black mb-4 text-gray-900">Quiz Complete!</h2>
        <p className="text-2xl mb-8 font-bold">You scored <span className="text-indigo-700 text-3xl">{score}</span> / {questions.length}</p>
        
        <button 
          onClick={restartQuiz} 
          className="bg-indigo-700 text-white text-xl font-bold px-8 py-4 rounded-xl hover:bg-indigo-800 flex items-center gap-3 mx-auto transition shadow-lg border-2 border-indigo-500"
        >
          <RefreshCcw size={24} /> Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-gray-300">
      <div className="flex justify-between items-center text-gray-500 mb-8 font-bold text-lg md:text-xl">
        <span className="bg-gray-100 px-3 py-1 rounded-lg">Question {current + 1} / {questions.length}</span>
        <span className="bg-indigo-50 text-indigo-800 px-3 py-1 rounded-lg">Score: {score}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-900 leading-snug min-h-[80px]">
        {questions[current].q}
      </h2>

      <div className="space-y-4">
        {questions[current].options.map((opt, i) => {
          let buttonClass = "bg-white hover:bg-gray-50 border-gray-300 text-gray-800";
          
          if (isAnswered) {
            if (i === questions[current].correct) {
              buttonClass = "bg-green-100 border-green-600 text-green-900 font-black ring-2 ring-green-400";
            } else if (i === selected) {
              buttonClass = "bg-red-100 border-red-600 text-red-900 font-bold opacity-60";
            } else {
              buttonClass = "opacity-40 border-gray-200";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={isAnswered}
              className={`block w-full text-left p-5 md:p-6 text-lg md:text-xl font-bold border-4 rounded-xl transition-all duration-200 transform ${!isAnswered && 'hover:-translate-y-1 hover:shadow-md'} ${buttonClass}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}