import React from 'react';
import { useSignOut } from 'react-auth-kit';
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {

  const signOut = useSignOut()
  const navigate = useNavigate()

  const logout = () => {
    signOut()
    navigate("/login")
  }

  const navLinks = [
    ["/about", "About Us"],
    ["/job", "Jobs"],
    ["/contact", "Contact"],
  ]

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                navLinks.map(link => <li className="nav-item">
                  <Link className="nav-link" to={link[0]}>{link[1]}</Link>
                </li>)
              }

            </ul>
            <form className="d-flex" onSubmit={e => e.preventDefault()}>
              <button className='btn btn-danger' onClick={logout}>Logout</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}
export default Navbar;