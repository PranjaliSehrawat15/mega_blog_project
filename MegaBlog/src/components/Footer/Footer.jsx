import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'


function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#2c3e50] to-[#3498db] text-white py-10 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/blogger-white-icon.png" alt="Blogora Logo" width="25" className="rounded" />
              <span className="ml-3 text-2xl font-bold tracking-wide">Blogora</span>
            </div>
            <p className="text-sm text-gray-200">&copy; {new Date().getFullYear()} Blogora. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-2 tracking-wider">Company</h3>
            <Link className="hover:text-blue-200 transition" to="/">Features</Link>
            <Link className="hover:text-blue-200 transition" to="/">Pricing</Link>
            <Link className="hover:text-blue-200 transition" to="/">Affiliate Program</Link>
            <Link className="hover:text-blue-200 transition" to="/">Press Kit</Link>
          </div>
          <div className="flex flex-col gap-2 min-w-[140px]">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-2 tracking-wider">Support</h3>
            <Link className="hover:text-blue-200 transition" to="/">Account</Link>
            <Link className="hover:text-blue-200 transition" to="/">Help</Link>
            <Link className="hover:text-blue-200 transition" to="/">Contact Us</Link>
            <Link className="hover:text-blue-200 transition" to="/">Customer Support</Link>
          </div>
          <div className="flex flex-col gap-2 min-w-[140px] mr-3">
            <h3 className="text-xs font-semibold uppercase text-gray-300 mb-2 tracking-wider">Legals</h3>
            <Link className="hover:text-blue-200 transition" to="/">Terms &amp; Conditions</Link>
            <Link className="hover:text-blue-200 transition" to="/">Privacy Policy</Link>
            <Link className="hover:text-blue-200 transition" to="/">Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer