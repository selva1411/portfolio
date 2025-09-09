import React from "react";

const Resume = () => {
  return (
    <section className="py-20 bg-white text-gray-900" id="resume">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Resume</h2>
        <a
          href="/resume.pdf"
          download="Selva_Adhityas_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
        <div className="mt-10">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="600px"
            className="border rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
