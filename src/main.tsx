import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { runTests } from './tests/vidyasetu.test';

// Run automated unit tests on startup
runTests();

createRoot(document.getElementById('root')!).render(<App />);
