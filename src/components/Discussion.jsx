import React, { useState } from 'react';
import { FileSpreadsheet, Printer, Share2 } from 'lucide-react';

export default function Discussion() {
  const [activeTab, setActiveTab] = useState('4.1');

  const TabButton = ({ id, icon: Icon, label }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`flex-1 py-4 md:py-6 px-4 text-center font-bold text-lg md:text-xl flex flex-col md:flex-row items-center justify-center gap-2 transition-all border-b-4 
        ${activeTab === id 
          ? 'bg-white text-indigo-800 border-indigo-800 shadow-inner' 
          : 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'}`}
    >
      <Icon size={24} strokeWidth={2.5} /> {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden flex flex-col">
      {/* High Visibility Tabs */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-300">
        <TabButton id="4.1" icon={FileSpreadsheet} label="4.1 Processing" />
        <TabButton id="4.2" icon={Printer} label="4.2 Printing (SOP)" />
        <TabButton id="4.3" icon={Share2} label="4.3 Transferring" />
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-10 flex-grow bg-slate-50 min-h-[500px]">
        
        {/* Section 4.1 */}
        {activeTab === '4.1' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-indigo-900 underline decoration-4 decoration-indigo-300 underline-offset-8">
              Processing Data Using Software
            </h2>
            
            <div className="bg-indigo-100 p-6 rounded-xl border-l-8 border-indigo-600">
              <h3 className="text-xl md:text-2xl font-extrabold text-indigo-900 mb-2">Definition</h3>
              <p className="text-lg md:text-xl text-indigo-900 font-medium">
                Data processing involves collecting raw data and translating it into usable information using software applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 bg-gray-100 p-2 inline-block rounded">Common Tools</h3>
                
                <ul className="space-y-3 text-lg text-gray-800 font-medium">
                  <li><strong>📊 Spreadsheets (Excel):</strong> Calculations, charts.</li>
                  <li><strong>📝 Word Processors (Word):</strong> Reports, docs.</li>
                  <li><strong>🗄️ Databases (Access):</strong> Storing large data.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center">
                <h4 className="font-bold text-xl mb-6 uppercase tracking-wider">The Processing Cycle</h4>
                

[Image of input process output diagram]

                <div className="flex flex-col items-center gap-2 w-full max-w-xs">
                  <div className="w-full bg-blue-100 border-2 border-blue-500 p-4 rounded-lg text-center font-bold text-blue-900 text-xl">INPUT (Raw)</div>
                  <div className="text-3xl font-black text-gray-400">⬇</div>
                  <div className="w-full bg-indigo-100 border-2 border-indigo-500 p-4 rounded-lg text-center font-bold text-indigo-900 text-xl shadow-lg scale-105">PROCESS</div>
                  <div className="text-3xl font-black text-gray-400">⬇</div>
                  <div className="w-full bg-green-100 border-2 border-green-500 p-4 rounded-lg text-center font-bold text-green-900 text-xl">OUTPUT (Info)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 4.2 */}
        {activeTab === '4.2' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-indigo-900 underline decoration-4 decoration-indigo-300 underline-offset-8">
              Printing Data (SOP)
            </h2>
            
            <div className="bg-yellow-100 p-6 rounded-xl border-l-8 border-yellow-500 shadow-sm">
              <h3 className="text-2xl font-black text-yellow-900 mb-4 uppercase">⚠️ Standard Operating Procedures</h3>
              <ol className="list-decimal pl-6 space-y-3 text-lg md:text-xl font-bold text-yellow-900">
                <li>Check hardware connection (USB/Network) & Power.</li>
                <li>Ensure correct paper size is loaded.</li>
                <li>Verify ink/toner levels.</li>
                <li className="text-red-700 bg-white inline-block px-2 border border-red-300">ALWAYS use <strong>Print Preview</strong> first!</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { type: "Inkjet", desc: "Liquid ink. Photos & Color.", color: "border-blue-500 bg-blue-50" },
                { type: "Laser", desc: "Powder toner. Fast text docs.", color: "border-gray-600 bg-gray-100" },
                { type: "Dot Matrix", desc: "Impact pins. Carbon receipts.", color: "border-orange-500 bg-orange-50" }
              ].map((p, i) => (
                <div key={i} className={`border-4 rounded-xl p-6 text-center shadow-lg ${p.color}`}>
                  <h4 className="text-xl font-black mb-2 uppercase">{p.type}</h4>
                  
                  <p className="font-bold text-gray-800">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4.3 */}
        {activeTab === '4.3' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-indigo-900 underline decoration-4 decoration-indigo-300 underline-offset-8">
              Transferring Files & Data
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6">Transfer Methods</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-4xl">☁️</span>
                    <div className="text-lg md:text-xl font-bold text-gray-800">Cloud Storage <br/><span className="text-sm font-normal text-gray-600">Google Drive, OneDrive</span></div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-4xl">💾</span>
                    <div className="text-lg md:text-xl font-bold text-gray-800">Physical Drive <br/><span className="text-sm font-normal text-gray-600">USB Flash Drive, HDD</span></div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="text-4xl">📧</span>
                    <div className="text-lg md:text-xl font-bold text-gray-800">Email <br/><span className="text-sm font-normal text-gray-600">Small documents</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-xl border-4 border-red-500 shadow-xl">
                <h3 className="text-2xl font-black text-red-900 mb-4 flex items-center gap-2">
                  🚫 CRITICAL SAFETY
                </h3>
                
                <ul className="list-disc pl-6 space-y-4 text-lg md:text-xl font-bold text-red-900">
                  <li>Scan external drives for viruses before opening.</li>
                  <li className="bg-white p-2 rounded border-2 border-red-200">
                    ALWAYS <strong>"Eject"</strong> USB drives via software before pulling them out.
                  </li>
                  <li>Check file compatibility (.docx vs .pdf).</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}