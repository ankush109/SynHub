import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white p-5 ">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          <div className="footer-links">
            <a href="/about" className="mr-4">
              About Us
            </a>
            <a href="/services" className="mr-4">
              Services
            </a>
            <a href="/blog" className="mr-4">
              Blog
            </a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="social-media-links">
            <a href="https://www.facebook.com/startupname" className="mr-4">
              Facebook
            </a>
            <a href="https://www.twitter.com/startupname" className="mr-4">
              Twitter
            </a>
            <a href="https://www.instagram.com/startupname" className="mr-4">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/startupname">LinkedIn</a>
          </div>
        </div>
        <div className="newsletter mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg"
          />
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg ml-2">
            Subscribe
          </button>
        </div>
        <div className="text-center mt-8">
          &copy; {new Date().getFullYear()} Synergy<br></br>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
