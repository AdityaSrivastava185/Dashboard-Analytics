import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="absolute inset-x-0 top-0 -z-10">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-medium text-white">Logo</span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
