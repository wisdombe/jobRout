import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="max-w-lg grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 mx-auto mb-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl text-blue-500 mr-4"
            />
            <div>
              <p className="text-lg font-bold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.profession}</p>
            </div>
          </div>
          <p className="text-gray-700">{testimonial.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
