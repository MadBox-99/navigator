import { createRoot } from 'react-dom/client';
import Welcome from './pages/welcome';
import '../css/app.css';

import.meta.glob([
    '../images/**',
    '../fonts/**',
]);

const root = document.getElementById('app');

if (root) {
    createRoot(root).render(<Welcome />);
}
