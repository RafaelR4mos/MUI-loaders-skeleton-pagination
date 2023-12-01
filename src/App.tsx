import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="page-layout">
        <Header />
        <div className="page-container">
          <Router />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
