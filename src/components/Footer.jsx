import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer
      className="bg-orange-100 dark:bg-[#1F1D2B] text-black dark:text-white mt-16 gap-35 md:flex"
      id="footer"
    >
      <div className="p-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">SitaRam</h2>

        <p className="text-gray-600 w-85">
          Your SitaRam app for delicious and fast food delivery. Taste the joy
          at your doorstep.
        </p>

        <div className="flex gap-4 mt-5">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
            (Icon, i) => (
              <div
                key={i}
                className="cursor-pointer w-10 h-10 flex justify-center items-center bg-gray-100 rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                <Icon className="text-gray-700 text-lg" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="gap-15 md:flex">
        <div className="flex gap-20 p-10">
          <div>
            {" "}
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <a href="/" className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange-400 transition">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            {" "}
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Help Center
              </a>
            </li>

            <li>
              <a href="/" className="hover:text-orange-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Contact Support
              </a>
            </li>
          </ul>
          </div>
        </div>
        <div className="p-10">
          {" "}
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-orange-400 transition">
              Email: support@SitaRam.com
            </li>
            <li className="hover:text-orange-400 transition">
              Phone: +91 91XXXXXXXX
            </li>
            <li className="hover:text-orange-400 transition">
              Location: San Francisco, USA
            </li>
          </ul>
          <div className="mt-8 text-center text-gray-900 text-md font-semibold">
            Copyright 2025 © SitaRam — All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
