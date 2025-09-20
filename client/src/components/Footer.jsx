import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-600 sm:px-4  ">
      {/* Logo + Auth */}
      <div className="container mx-auto flex flex-row justify-center ">
       <Link to="/" className="flex items-center ">
        <img src="/assets/Logo.png" alt="Logo" className="h-40" />
      </Link>

        
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 text-center px-2">
        {/* Column 1: Product */}
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">QR Code Generator</Link></li>
            <li><Link to="/pricing" className="hover:underline">Plans & Prices</Link></li>
            <li><Link to="/cancel" className="hover:underline">Cancel Subscription</Link></li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div >
          <h3 className="font-bold text-gray-800 text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/support" className="hover:underline">Support</Link></li>
            <li><Link to="/docs" className="hover:underline">Documentation</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookies Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Help */}
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/grievance" className="hover:underline">Grievance Redressal</Link></li>
            <li><Link to="/api" className="hover:underline">API Help</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 px-8 border-t border-gray-200 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          2025 &copy; QR Code Generator | All rights reserved. 
        </p>
        <div className="flex space-x-4 items-center text-center sm:text-right">
          <div className="flex items-center space-x-1">
            <i className="fas fa-globe text-base text-gray-500"></i>
            <span>English</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-dollar-sign text-base text-gray-500"></i>
            <span>Currency</span>
          </div>

          {/* Social PNGs (replace src with your image paths) */}
          <a href="https://x.com/yashrajb6k" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/n7r_look_b6k/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.png" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/ricky2000/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
