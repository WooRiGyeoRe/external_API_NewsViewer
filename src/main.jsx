import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Axios_api from './axios_example/Axios_api';
import ReactRouter_NavLink from './reactRouter_NavLink/ReactRouter_NavLink';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Axios_api /> */}
    <ReactRouter_NavLink />
  </StrictMode>,
);
