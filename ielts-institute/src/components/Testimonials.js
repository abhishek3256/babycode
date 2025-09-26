import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      bandScore: "8.5",
      image: "👩‍⚕️",
      text: "The AI-powered feedback was incredibly helpful. I improved my speaking score from 6.5 to 8.5 in just 3 months. The personalized practice sessions made all the difference!",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Software Engineer",
      bandScore: "7.5",
      image: "👨‍💻",
      text: "The mock tests were exactly like the real exam. I felt confident and prepared. The expert guidance helped me understand my weaknesses and improve systematically.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Business Analyst",
      bandScore: "8.0",
      image: "👩‍💼",
      text: "The speaking practice sessions with AI feedback were amazing. I could practice anytime and get instant feedback on my pronunciation and fluency. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say 
            about their IELTS journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Student Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm font-semibold text-primary-600">
                    Achieved Band {testimonial.bandScore}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Thousands of Successful Students
            </h3>
            <p className="text-xl text-blue-100">
              Our proven methods have helped students achieve their target band scores
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10K+</div>
              <div className="text-blue-100">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">85%</div>
              <div className="text-blue-100">Score Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
