import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
      
      {/* Social media links added here */}
      <div className="mt-6 text-gray-700 dark:text-gray-300">
        <p>Email: <a href="mailto:selvaadhityas2005@gmail.com">selvaadhityas2005@gmail.com</a></p>
        <p>Phone: <a href="tel:+918438805199">+91 84388 05199</a></p>
        <p>
          GitHub: <a href="https://github.com/selva1411" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/selva-adhityas-511873288/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </p>
      </div>

    </div>
  );
}