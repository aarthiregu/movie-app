import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left section: Social Media */}
        <div className="flex items-center gap-4">
          <h2 className="font-bold">Follow us on:</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/tvmaze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/tvmaze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/tvmaze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Center section: Copyright */}
        <div className="text-center">
          <p>© TVmaze.com</p>
        </div>

        {/* Right section: Features (Horizontal) */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline">API</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Request a Show</a>
          <a href="#" className="hover:underline">Data Policies</a>
        </div>

      </div>
    </footer>
  );
}
