import React from 'react'

const Footer = () => {
  return (
      <div>
           <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Instagram</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">Facebook</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p>Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-4 px-4 py-2 w-full text-gray-800 rounded focus:outline-none"
            />
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer;
