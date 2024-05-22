import React from 'react'
import { BsSearch } from 'react-icons/bs'

function Header({ title, items }) {
  return (
    <header className="bg-dark text-white py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h3 className="me-4">{title}</h3>
          <ul className="d-flex list-unstyled mb-0" style={{ gap: '1rem' }}>
            {items &&
              items.map((item) => (
                <li key={item.id}>
                  <a href="/" className="text-white text-decoration-none">
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            style={{ width: '400px' }}
          />
          <button className="btn btn-danger flex-start">
            <BsSearch />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
