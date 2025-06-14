import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/home/index";
import MoviesPage from "./pages/movies/index";
import MovieDetailPage from "./pages/movies/detail/index";
import BookingPage from "./pages/booking/index";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import NotFoundPage from "./pages/not-found/index";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:slug" element={<MovieDetailPage />} />
            <Route path="/booking/*" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
