import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-600">ProcureHub</h1>
        <p className="mt-2 text-gray-600">
          Transparent • Fair • Anonymous IT Contracting
        </p>
      </header>

      <main>
        <p className="mb-6 text-gray-700 max-w-md">
          Welcome to ProcureHub, the platform that connects contractors and
          clients fairly—no middlemen, no bribes, just equal opportunity.
        </p>

        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} ProcureHub. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
