import Image from 'next/image';
import about from '../assets/about.png';

function Roadmap() {
  return (
    <div className="flex flex-col justify-center items-center w-screen bg-rm_pink ">
      <div className="flex flex-col 2xl:w-1/2 justify-center items-center p-16 2xl:p-24">
        <h1 className="text-Montserrat justify-center text-center text-3xl md:text-xl 2xl:text-4xl text-rm_blue">
          The Real Monsters Mission
        </h1>
        <p className="text-white text-Montserrat md:text-xl 2xl:text-2xl text-center md:text-left mt-6 md:mt-12 leading-relaxed font-normal md:px-0 px-4 2xl:w-5/6 2xl:pr-20">
          We have set long term goals for the projects realization which will
          allow us to fund each set goalpost. Once we reach each sell-trough
          percentage, we will begin realizing the stated goal. With the set
          percentages we can ensure that each goal will have sufficient funding
          and acquired talent to be realized.
        </p>
      </div>

      <div className="flex w-1/2 py-2">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-rm_blue absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow">
                      when the project sells out 10% message
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-rm_blue border-white border-2 p-2 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center -mt-4 md:mt-0">
                  <p className="text-lg text-white p-4">10%</p>
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      when the project sells out 30% message
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-rm_blue border-white border-2 p-2 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center -mt-4 md:mt-0">
                  <p className="text-lg text-white p-4">30%</p>
                </div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow">
                      when the project sells out 60% message
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-rm_blue border-white border-2 p-2 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center -mt-4 md:mt-0">
                  <p className="text-lg text-white p-4">60%</p>
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      when the project sells out 100% message
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-rm_blue border-white border-2 p-2 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center -mt-4 md:mt-0">
                  <p className="text-lg text-white p-4">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
