import Image from 'next/image'
import React from 'react'


function service() {
  return (
    <div>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div class="py-3 sm:py-4">
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width="134"
                        height="106"
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Start your career by working on live projects.
                </h2>
                <p className="text-body-color mb-8 text-base">
                  We provide Intership program to give industrial konwledge to candidates where you get handson
                  solving real world problems through programming

                </p>
                <p className="text-dark mb-14 text-lg font-semibold sm:text-3xl">
                  We are working in some major techonologies
                </p>
                <ul className="text-body-color mb-14 text-base">
                  <li>Web Development (techonologies: HTMl/CSS/JAVASCRIPT/ REACTJS/ANGULARJS)</li>
                  <li>Android  App Development (techonologies: JAVA/ REACT-Native)</li>
                  <li> Software Testing</li>
                  <li>Cloud (techonologies: AWS/AZURE)</li>
                  <li>Python Development.</li>
                  <li> Cyber Security.</li>
                  <li> AI/ML with Data Science.</li>
                  <li>IOT & Embedded System.</li>
                  <li> Java Development.</li>



                </ul>

                <a className="bg-yellow-300 inline-flex items-center justify-center rounded-lg py-4 px-10 text-center text-base font-normal text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyjynPLl0qjaDhh8Liou1cYGYF2SVPoud1Z1aQKNdGZ-02iQ/viewform">
                  Get Started

                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default service







