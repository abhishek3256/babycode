import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🎤",
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI-powered feedback and pronunciation analysis to boost your confidence.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📝",
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS conditions with instant scoring and detailed feedback.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🤖",
      title: "AI Band Score",
      description: "Advanced AI technology predicts your band score and provides personalized improvement recommendations.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guidance",
      description: "Learn from certified IELTS trainers with years of experience and proven track records.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IELTS Program?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with expert instruction 
            to help you achieve your target band score.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Learning Experience
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our platform offers a complete IELTS preparation ecosystem with personalized 
                learning paths, real-time progress tracking, and unlimited practice opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Unlimited practice tests</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 AI-powered feedback</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert instructor support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Mobile-friendly platform</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl">📊</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Track Your Progress
                </h4>
                <p className="text-gray-600 mb-6">
                  Monitor your improvement with detailed analytics and performance insights.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Overall Progress</span>
                    <span className="text-sm font-semibold text-primary-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
