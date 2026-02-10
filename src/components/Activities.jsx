import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Printer, 
  Save, 
  Share2, 
  CheckCircle, 
  Monitor,
  AlertTriangle,
  CloudUpload // Added icon for Google Drive
} from 'lucide-react';

export default function Activities() {
  // State to track completed steps
  const [completed, setCompleted] = useState({
    excel: false,
    word: false,
    print: false,
    transfer: false,
    drive: false // Added new state for Google Drive task
  });

  const toggleComplete = (task) => {
    setCompleted(prev => ({ ...prev, [task]: !prev[task] }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="bg-indigo-700 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Monitor className="text-indigo-300" />
          Hands-on Laboratory: LO 4
        </h2>
        <p className="mt-2 text-indigo-100 max-w-2xl">
          Follow the instructions below to produce output/data using actual computer software. 
          Perform these tasks on your assigned workstation.
        </p>
      </div>

      {/* TASK 1: EXCEL */}
      <section className={`bg-white rounded-xl shadow-md border-l-8 ${completed.excel ? 'border-green-500' : 'border-green-600'} overflow-hidden transition-all`}>
        <div className="p-6 bg-green-50 border-b border-green-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
            <FileSpreadsheet /> Task 1: Data Processing (MS Excel)
          </h3>
          <button 
            onClick={() => toggleComplete('excel')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition ${completed.excel ? 'bg-green-600 text-white' : 'bg-white text-green-700 border border-green-300'}`}
          >
            {completed.excel ? <><CheckCircle size={16}/> Completed</> : "Mark as Done"}
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Instructions:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Open <strong>Microsoft Excel</strong> (Start Menu &gt; Excel).</li>
                <li>Create a new Blank Workbook.</li>
                <li>Enter the data shown in the "Sample Data" table exactly as it appears.</li>
                <li><strong>Process the Data:</strong>
                  <ul className="list-disc pl-5 mt-1 text-gray-500">
                    <li>Use the <code>=AVERAGE()</code> formula to calculate the Average Grade for each student.</li>
                    <li>Use the <code>=IF()</code> formula to determine if the student "Passed" (&gt;=75) or "Failed".</li>
                  </ul>
                </li>
                <li><strong>Formatting:</strong> Bold the header row and add borders to the table.</li>
              </ol>
            </div>

            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">Sample Data to Enter</h5>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="p-2 border">Student Name</th>
                    <th className="p-2 border">Math</th>
                    <th className="p-2 border">Science</th>
                    <th className="p-2 border">English</th>
                    <th className="p-2 border bg-yellow-50">Average (Formula)</th>
                    <th className="p-2 border bg-yellow-50">Remarks (Formula)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">Dela Cruz, Juan</td><td className="p-2 border">85</td><td className="p-2 border">88</td><td className="p-2 border">90</td><td className="p-2 border italic text-gray-400">=AVERAGE(B2:D2)</td><td className="p-2 border italic text-gray-400">=IF(E2&gt;=75,"Passed","Failed")</td></tr>
                  <tr><td className="p-2 border">Santos, Maria</td><td className="p-2 border">74</td><td className="p-2 border">70</td><td className="p-2 border">72</td><td className="p-2 border italic text-gray-400">...</td><td className="p-2 border italic text-gray-400">...</td></tr>
                  <tr><td className="p-2 border">Reyes, Jose</td><td className="p-2 border">90</td><td className="p-2 border">92</td><td className="p-2 border">89</td><td className="p-2 border italic text-gray-400">...</td><td className="p-2 border italic text-gray-400">...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 text-sm text-blue-800">
            <Save className="shrink-0 mt-0.5" size={18} />
            <div>
              <strong>Saving Instruction:</strong> Click <em>File &gt; Save As</em>. Navigate to <code>Documents</code>. Create a new folder named <strong>"LO4_Outputs"</strong>. Save the file as <code>LastName_Grades.xlsx</code>.
            </div>
          </div>
        </div>
      </section>

      {/* TASK 2: WORD */}
      <section className={`bg-white rounded-xl shadow-md border-l-8 ${completed.word ? 'border-blue-500' : 'border-blue-600'} overflow-hidden transition-all`}>
        <div className="p-6 bg-blue-50 border-b border-blue-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-blue-800 flex items-center gap-2">
            <FileText /> Task 2: Report Generation (MS Word)
          </h3>
          <button 
            onClick={() => toggleComplete('word')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition ${completed.word ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-300'}`}
          >
            {completed.word ? <><CheckCircle size={16}/> Completed</> : "Mark as Done"}
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-gray-700">Instructions:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
              <li>Open <strong>Microsoft Word</strong>.</li>
              <li>Type a formal header: 
                <div className="font-serif italic ml-4 my-2 text-black">"Summary of Student Grades - Quarter 1"</div>
              </li>
              <li>Write a short introduction paragraph (1-2 sentences).</li>
              <li><strong>Data Integration:</strong> 
                <ul className="list-disc pl-5 mt-1">
                  <li>Go back to your Excel file.</li>
                  <li>Select the table you created (Ctrl+C).</li>
                  <li>Paste it into your Word document (Ctrl+V).</li>
                </ul>
              </li>
              <li>Add a "Prepared by: [Your Name]" footer.</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center text-sm text-blue-800 h-full">
            <div className="flex items-start gap-3 mb-4">
              <Save className="shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Saving Instruction:</strong><br/>
                Save inside your <code>LO4_Outputs</code> folder.<br/>
                Filename: <code>LastName_Report.docx</code>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 3: PRINTING */}
      <section className={`bg-white rounded-xl shadow-md border-l-8 ${completed.print ? 'border-slate-700' : 'border-slate-800'} overflow-hidden transition-all`}>
        <div className="p-6 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Printer /> Task 3: Printing Data (SOP)
          </h3>
          <button 
            onClick={() => toggleComplete('print')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition ${completed.print ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 border border-slate-300'}`}
          >
            {completed.print ? <><CheckCircle size={16}/> Completed</> : "Mark as Done"}
          </button>
        </div>

        <div className="p-6 space-y-4">
           <div className="flex items-start gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
             <AlertTriangle className="text-yellow-600 shrink-0" />
             <div className="text-sm text-yellow-800">
               <strong>Standard Operating Procedure (SOP):</strong> Before printing, verify that the printer is turned on, paper is loaded, and cables are connected.
             </div>
           </div>

           <h4 className="font-bold text-gray-700">Steps to Print:</h4>
           <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
             <li>In your Word Document, click <strong>File</strong> &gt; <strong>Print</strong> (or press Ctrl + P).</li>
             <li><strong>Check Print Preview:</strong> Ensure the table is not cut off and fits on one page.</li>
             <li>Select the correct printer (Ask teacher if unsure).</li>
             <li>Settings: Select <strong>A4</strong> paper size and <strong>Portrait</strong> orientation.</li>
             <li>Click <strong>Print</strong>. (If no physical printer is available, select "Microsoft Print to PDF" and save as <code>LastName_PrintOutput.pdf</code>).</li>
           </ol>
        </div>
      </section>

      {/* TASK 4: TRANSFER */}
      <section className={`bg-white rounded-xl shadow-md border-l-8 ${completed.transfer ? 'border-purple-500' : 'border-purple-600'} overflow-hidden transition-all`}>
        <div className="p-6 bg-purple-50 border-b border-purple-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-purple-800 flex items-center gap-2">
            <Share2 /> Task 4: USB Transfer & Safety
          </h3>
          <button 
            onClick={() => toggleComplete('transfer')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition ${completed.transfer ? 'bg-purple-600 text-white' : 'bg-white text-purple-700 border border-purple-300'}`}
          >
            {completed.transfer ? <><CheckCircle size={16}/> Completed</> : "Mark as Done"}
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-700 mb-2">Instructions:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Insert your USB Flash Drive into the system unit.</li>
                <li>Open <strong>File Explorer</strong> (Win + E).</li>
                <li>Locate your USB Drive (usually Drive D: or E:).</li>
                <li>Create a folder on the USB named: <code>Year_Section_LastName</code>.</li>
                <li><strong>Copy Data:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Go to Documents &gt; LO4_Outputs.</li>
                    <li>Select all files (Ctrl + A).</li>
                    <li>Copy (Ctrl + C) and Paste (Ctrl + V) them into your USB folder.</li>
                  </ul>
                </li>
              </ol>
            </div>
            
            <div className="space-y-4">
               <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                 <h5 className="font-bold text-red-800 flex items-center gap-2 mb-1">
                   <AlertTriangle size={16}/> Critical Safety Step
                 </h5>
                 <p className="text-sm text-red-700">
                   Do not pull the USB drive out immediately! This can corrupt your data.
                 </p>
               </div>
               
               <div className="p-4 bg-gray-50 border rounded-lg">
                 <h5 className="font-bold text-gray-700 mb-2">Proper Ejection Procedure:</h5>
                 <ul className="list-disc pl-5 text-sm text-gray-600">
                   <li>Go to the System Tray (bottom right corner of screen).</li>
                   <li>Click the USB Icon ("Safely Remove Hardware").</li>
                   <li>Select "Eject Mass Storage".</li>
                   <li>Wait for the "Safe to Remove" notification before pulling the device.</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 5: GOOGLE DRIVE (NEW ADDITION) */}
      <section className={`bg-white rounded-xl shadow-md border-l-8 ${completed.drive ? 'border-amber-500' : 'border-amber-600'} overflow-hidden transition-all`}>
        <div className="p-6 bg-amber-50 border-b border-amber-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
            <CloudUpload /> Task 5: Cloud Storage (Google Drive)
          </h3>
          <button 
            onClick={() => toggleComplete('drive')}
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition ${completed.drive ? 'bg-amber-600 text-white' : 'bg-white text-amber-700 border border-amber-300'}`}
          >
            {completed.drive ? <><CheckCircle size={16}/> Completed</> : "Mark as Done"}
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-700 mb-2">Instructions:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
              <li>Open a Web Browser (Chrome/Edge).</li>
              <li>Log in to your <strong>Google Account</strong> (Gmail).</li>
              <li>Navigate to <a href="https://drive.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">drive.google.com</a>.</li>
              <li><strong>Create Folder:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Click <strong>+ New</strong> &gt; <strong>Folder</strong>.</li>
                  <li>Name it: <code>LO4_Backups_LastName</code>.</li>
                  <li>Double-click to open the new folder.</li>
                </ul>
              </li>
              <li><strong>Upload Files:</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Click <strong>+ New</strong> &gt; <strong>File Upload</strong>.</li>
                  <li>Navigate to Documents &gt; <code>LO4_Outputs</code>.</li>
                  <li>Select your Excel and Word files and click Open.</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg flex flex-col justify-center text-sm text-amber-900 h-full">
            <h5 className="font-bold mb-2 flex items-center gap-2">
              <CloudUpload size={18}/> Why Cloud Storage?
            </h5>
            <p className="mb-4">
              Saving to Google Drive ensures your data is accessible from any computer and serves as a backup if your USB drive is lost or corrupted.
            </p>
            <div className="bg-white p-3 rounded border border-amber-200">
              <strong>Verification:</strong><br/>
              Ensure you see "Upload Complete" in the bottom right corner of your browser window before closing the tab.
            </div>
          </div>
        </div>
      </section>

      {/* Completion Status */}
      <div className="text-center pt-8 no-print">
        {Object.values(completed).every(Boolean) ? (
          <div className="animate-bounce bg-green-100 text-green-800 p-4 rounded-xl inline-block shadow-lg border border-green-200">
            <h3 className="text-2xl font-bold">🎉 Competency Achieved!</h3>
            <p>You have successfully completed all LO 4 requirements.</p>
          </div>
        ) : (
          <p className="text-gray-400 italic">Complete all sections above to finish the lesson.</p>
        )}
      </div>

    </div>
  );
}