import React from 'react';
import { ChevronRight, CheckCircle, Monitor, Printer, Share2 } from 'lucide-react';

export default function Home({ onStart }) {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl border-b-8 border-indigo-950 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Produce Output/Data <br className="hidden md:block"/> Using Computer Systems
        </h1>
        <p className="text-xl md:text-2xl font-medium text-indigo-100 mt-4 bg-indigo-950/30 inline-block px-4 py-2 rounded-lg border border-indigo-700">
          Unit of Competency: LO 4
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Objectives Card */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-4 border-indigo-600">
          <h2 className="text-2xl md:text-3xl font-black text-indigo-900 mb-6 border-b-4 border-indigo-100 pb-2">
            Learning Objectives
          </h2>
          <ul className="space-y-4">
            {[
              "4.1 Process entered data using software commands",
              "4.2 Print out data using hardware/peripherals (SOP)",
              "4.3 Transfer files between compatible systems"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg md:text-xl font-bold text-gray-800">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1 drop-shadow-sm" size={28} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics Grid */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-4 border-purple-600">
          <h2 className="text-2xl md:text-3xl font-black text-purple-900 mb-6 border-b-4 border-purple-100 pb-2">
            Key Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Monitor, label: "App Software", color: "bg-blue-100 text-blue-900 border-blue-300" },
              { icon: Printer, label: "Printers (SOP)", color: "bg-orange-100 text-orange-900 border-orange-300" },
              { icon: Share2, label: "File Transfer", color: "bg-green-100 text-green-900 border-green-300" },
              { icon: CheckCircle, label: "Data Safety", color: "bg-red-100 text-red-900 border-red-300" }
            ].map((topic, i) => (
              <div key={i} className={`${topic.color} p-4 rounded-xl border-2 flex items-center gap-3 shadow-sm hover:scale-105 transition-transform`}>
                <topic.icon size={32} strokeWidth={2.5} />
                <span className="font-bold text-lg">{topic.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center pt-8 pb-12">
        <button 
          onClick={onStart}
          className="bg-indigo-700 text-white text-xl md:text-2xl font-bold px-10 py-5 rounded-full shadow-xl hover:bg-indigo-800 transition transform hover:scale-105 hover:shadow-2xl flex items-center mx-auto gap-3 border-4 border-indigo-500"
        >
          Start Lesson Now <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}