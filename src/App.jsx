import React, { useState } from 'react';
import Home from './components/Home';
import Discussion from './components/Discussion';
import Quiz from './components/Quiz';
import Activities from './components/Activities';
import { BookOpen, Monitor, PenTool, Layout } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      {/* High Contrast Navigation Bar */}
      <nav className="bg-indigo-950 text-white shadow-xl p-4 md:p-5 no-print sticky top-0 z-50 border-b-4 border-indigo-700">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center lg:text-left">
            LO 4: Produce Output/Data
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 w-full lg:w-auto">
            {[
              { id: 'home', icon: Layout, label: 'Home' },
              { id: 'discussion', icon: BookOpen, label: 'Discussion' },
              { id: 'quiz', icon: PenTool, label: 'Quiz' },
              { id: 'activity', icon: Monitor, label: 'Hands-on' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition text-sm md:text-base shadow-sm
                  ${currentSection === item.id 
                    ? 'bg-white text-indigo-900 ring-2 ring-indigo-300' 
                    : 'bg-indigo-900 hover:bg-indigo-800 border border-indigo-700'}`}
              >
                <item.icon size={20} /> {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 md:p-8 max-w-7xl">
        {currentSection === 'home' && <Home onStart={() => setCurrentSection('discussion')} />}
        {currentSection === 'discussion' && <Discussion />}
        {currentSection === 'quiz' && <Quiz />}
        {currentSection === 'activity' && <Activities />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 p-6 text-center font-bold no-print mt-auto">
        <p>Computer Systems Servicing NC II | ICT Lesson Module</p>
      </footer>
    </div>
  );
}

export default App;