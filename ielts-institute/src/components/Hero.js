import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master Your
              <span className="block text-yellow-300">IELTS Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Unlock your potential with our comprehensive IELTS preparation program. 
              Expert guidance, AI-powered practice, and proven strategies to achieve your target band score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-blue-100">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.9</div>
                <div className="text-blue-100">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Banner */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">IELTS Practice Test</h3>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Live
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Listening</span>
                      <span className="text-primary-600 font-semibold">Band 7.5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Reading</span>
                      <span className="text-primary-600 font-semibold">Band 8.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Writing</span>
                      <span className="text-primary-600 font-semibold">Band 7.0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Speaking</span>
                      <span className="text-primary-600 font-semibold">Band 7.5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold text-gray-800">Overall Band: 7.5</div>
                  <div className="text-sm text-gray-600">Target: 7.0+</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">📚</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
