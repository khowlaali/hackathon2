import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-9">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start mb-9">
        {/* Left Side Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-8 lg:mb-0">
          {/* Column 1 */}
          <div className='text-sm'>
            <ul className="space-y-2">
              <li>FIND A STORE</li>
              <li>BECOME A MEMBER</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>Send Us Feedback</li>
              <li>STUDENT DISCOUNTS</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className='text-sm'>
            <h4 className="font-semibold mb-4">GET HELP</h4>
            <ul className="space-y-1 text-gray-500">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className='text-sm'>
            <h4 className="font-semibold mb-4">ABOUT NIKE</h4>
            <ul className="space-y-1 text-gray-500">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* Right Side Social Media Icons */}
        <div className="flex space-x-4 mb-8 lg:mb-0">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row justify-between text-gray-500 text-sm px-9">
        <p className="mb-4 lg:mb-0">2023 Nike, Inc. All Rights Reserved</p>
        <ul className="flex gap-x-2">
          <li>Guides</li>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Nike Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}
