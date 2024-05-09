import React, { useState } from "react";
import BannerImage from "./images/job-find.webp";
import Image2 from "./images/images3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faHandshake } from "@fortawesome/free-solid-svg-icons";

import Testimonials from "./Testimonials";
import { faBriefcase, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import UserDetailsForm from "./UserDetailsForm";

const Homepage = () => {
  const [showForm, setShowForm] = useState(false);
  const testimonials = [
    {
      name: "Jane Doe",
      profession: "Software Engineer",
      quote:
        "Job Match Consultancy helped me land my dream job! Their personalized approach and expert guidance were instrumental in my career success.",
    },
    {
      name: "John Smith",
      profession: "Marketing Manager",
      quote:
        "I'm impressed by the quality of job recommendations I received from Job Match Consultancy. They truly understand my skills and aspirations.",
    },
    {
      name: "Emily Johnson",
      profession: "Graphic Designer",
      quote:
        "Thanks to Job Match Consultancy, I found a job that aligns perfectly with my creative talents. Highly recommended!",
    },
    {
      name: "Michael Brown",
      profession: "Project Manager",
      quote:
        "Job Match Consultancy exceeded my expectations! Their expert team guided me through the entire job search process and helped me secure a rewarding position.",
    },
  ];
  return (
    <div className="homepage bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="flex p-4 gap-5">
        <h1 className="text-4xl font-bold mb-6">
          Find Your Perfect Job Match Today!
        </h1>
        <FontAwesomeIcon
          icon={faBriefcase}
          className="text-4xl text-blue-500 mb-4"
        />
      </div>

      <div className="relative py-4  w-full">
        <img
          className="mx-auto rounded-md"
          src={BannerImage}
          alt="Find Your Perfect Job"
        />
      </div>

      <div className="m-2 p-4 flex flex-col">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Get Started
        </button>

        {showForm && <UserDetailsForm onClose={() => setShowForm(false)} />}
        <FontAwesomeIcon
          icon={faUserCheck}
          className="text-4xl text-green-500 mt-8"
        />
      </div>

      <div className="mt-8 text-center lg:flex  bg-orange-800">
        <div className="lg:w-1/2">
          <p className="text-lg text-center text-white mb-8">
            We specialize in connecting job seekers with their ideal
            opportunities. Let us help you find the perfect job match today!
          </p>

          <img
            className="object-cover text-center mx-auto rounded-md"
            src={Image2}
            alt="job serach image"
          />
        </div>
        <div className="bg-white mt-4 lg:mt-0  lg:w-1/2">
          {" "}
          <ul className="text-left h-full  mb-8 p-2 rounded-lg shadow-lg">
            <li className="mb-3">
              Personalized job recommendations based on your skills and
              preferences.
            </li>
            <li className="mb-3">
              Time-saving technology to streamline your job search process.
            </li>
            <li className="mb-3">
              Expert guidance and support from career counselors and industry
              professionals.
            </li>
            <li className="mb-3">
              Access to a comprehensive job database with diverse employment
              opportunities.
            </li>
            <li className="mb-3">
              User-friendly interface designed for easy navigation and quick job
              discovery.
            </li>
            <li className="mb-3">
              Career development resources including training programs and
              workshops.
            </li>
            <li className="mb-3">
              Tailored notifications and alerts for new job postings matching
              your criteria.
            </li>
            <li>Maintain confidentiality during your job search process.</li>
          </ul>
        </div>
      </div>

      <Testimonials testimonials={testimonials} />
      <div className="bg-white p-4 mt-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Our Industry Affiliations and Partnerships
        </h2>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-3xl text-gray-700"
          />
          <FontAwesomeIcon icon={faAward} className="text-3xl text-gray-700" />
          <FontAwesomeIcon
            icon={faHandshake}
            className="text-3xl text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
