import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
