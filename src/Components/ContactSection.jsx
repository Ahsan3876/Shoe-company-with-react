import React from "react";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="section-container flex flex-col lg:flex-row items-center justify-between p-16 scroll-mt-10 mt-10 scroll-smooth"
      >
        <div className="mb-10 lg:mb-0 shrink-0 self-start md:self-center">
          <h2 className="text-3xl md:text-6xl font-bold">Contact Us</h2>
          <p className="max-w-[180px] my-8">
            THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <img src="./images/facebook.svg" alt="facebook icon" />
            </a>
            <a href="#">
              <img src="./images/instagram.svg" alt="instagram icon" />
            </a>
            <a href="#">
              <img src="./images/twitch.svg" alt="twitch icon" />
            </a>
            <a href="#">
              <img src="./images/youtube.svg" alt="youtube icon" />
            </a>
          </div>
        </div>
        <div className="w-full">
          <iframe
            className="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60090726364!2d-96.87198002011303!3d32.82058616531825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1679084925294!5m2!1sen!2sin"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
