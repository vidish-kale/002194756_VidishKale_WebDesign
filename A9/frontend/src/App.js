import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App/Home/Home"
import About from "./App/About/About"
import Job from "./App/Job/Job"
import Contact from "./App/Contact/Contact"
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import Login from './App/Login/Login';

function App() {
  return (
    <AuthProvider authType='cookie' authName='_auth' cookieDomain={window.location.hostname} cookieSecure={false}>
      <Router>
        <Routes>
          <Route path="/" element={
            <RequireAuth loginPath='/login'>
              <Home />
            </RequireAuth>
          } />
          <Route path="/about" element={
            <RequireAuth loginPath='/login'>
              <About />
            </RequireAuth>
          } />
          <Route path="/contact" element={
            <RequireAuth loginPath='/login'>
              <Contact />
            </RequireAuth>
          } />
          <Route path="/job" element={
            <RequireAuth loginPath='/login'>
              <Job />
            </RequireAuth>
          } />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;




