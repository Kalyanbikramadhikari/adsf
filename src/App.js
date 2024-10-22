// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/27
// Modified-Date: 

import Routes from './routes'


// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <ToastContainer/>
      <Routes/>

    </div>
  );
}

export default App;
