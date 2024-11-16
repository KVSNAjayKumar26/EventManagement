// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";
import EventDetails from "./components/EventDetails";

const eventList = [
  {
    id: 1,
    name: "React Conference",
    date: "2024-12-01",
    time: "10:00 AM",
    location: "San Francisco, CA",
    description: "A conference for React developers to share knowledge and network.",
  },
  {
    id: 2,
    name: "JavaScript Summit",
    date: "2024-12-15",
    time: "9:00 AM",
    location: "New York, NY",
    description: "A summit to explore the latest trends in JavaScript development.",
  },
];

function App() {
  return (
    <Router>
      <Header />
      <main>
        {/* Use <Routes> to wrap all <Route> components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails events={eventList} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
