import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import WebChannels from "./Pages/WebChannels.jsx";
import People from "./Pages/People.jsx";
import Networks from "./Pages/Networks.jsx";
import Calendar from "./Pages/Calendar.jsx";
import ShowDetails from "./Pages/ShowDetails.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Webchannels" element={<WebChannels />} />
            <Route path="/People" element={<People />} />
            <Route path="/Networks" element={<Networks />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/show/:id" element={<ShowDetails />} /> {/* Dynamic show page */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
