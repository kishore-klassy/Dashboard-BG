
import React from 'react';
import './index.css';
import { Button } from '@shadcn/ui';

const App = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Project!</h1>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">Click Me</Button>
    </div>
  );
};

export default App;
