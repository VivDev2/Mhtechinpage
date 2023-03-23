import React from 'react'
import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { UseEffect } from 'react';
import Link from 'next/link';

const index = () => {
  UseEffect(() => {
    const video = document.getElementById('my-video');
    video.setAttribute('loop', '');
  }, []);


  return (

    <div>
      <div className="flex items-center">
        <div className="w-1/2  p-4 text-center">
          <span className="font-bold float-left text-center text-2xl">"Empowering businesses with innovative software solutions."</span>
          <p className ="text-base font-medium text-gray-800">Let's get started</p>
        </div>
        <video id="my-video" width="1244" height="800" autoPlay muted>
          <source src="Lines.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <section className="md:h-full flex items-center text-gray-600">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">

              <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Services We Provide  To Our Clients</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src='/react.png' alt="blog " width={205} // width of the image
                    height={75} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">

                    <h1 className="text-2xl font-semibold mb-3">Web Developement</h1>
                    <p className="leading-relaxed mb-3">We Provide website design and developement and use morden technology.
                      frameworks,like reactjs angular which is faster and morden.</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More </a>


                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src='/cloud.png' alt="blog" height={10} width={400} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">

                    <h1 className="text-2xl font-semibold mb-3">Cloud Developement</h1>
                    <p className="leading-relaxed mb-3">we provide best cloud solutions to depoly your app and mentain the life cycle and handle all the secutrity

                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src='/chip.png' alt="blog" width={100} height={300} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">

                    <h1 className="text-2xl font-semibold mb-3">Embedded Technology</h1>
                    <p className="leading-relaxed mb-3">Embedded solutions are avaliable we have a great
                      team to hannlde Embedded stuffs like aurdino chips and micro projects
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More    </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src='/android.png' alt="blog " width={400} // width of the image
                    height={50} />
                  <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">

                    <h1 className="text-2xl font-semibold mb-3">Android Developement</h1>
                    <p className="leading-relaxed mb-3">We Provide Android developement and application support for our clients with morden frameworks</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className ="text-gray-600 body-font">
        <div className ="container px-5 py-24 mx-auto">
          <div className ="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className ="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Why Choose Us</h1>
            <p className ="lg:w-1/2 w-full leading-relaxed text-gray-800">Whatever projects we do we follow culture, that Benifits Clients and Company.</p>
          </div>
          <div className ="flex flex-wrap -m-4">
            <div className ="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-green-400 hover:text-white transition duration-300 ease-in">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M10 339 c0 -162 1 -171 20 -176 11 -3 20 -12 20 -19 0 -12 50 -14
                                    290 -14 l290 0 0 171 c0 162 -1 171 -20 176 -11 3 -20 12 -20 19 0 12 -50 14
                                    -290 14 l-290 0 0 -171z m570 1 l0 -160 -275 0 -275 0 0 160 0 160 275 0 275
                                    0 0 -160z m30 -40 l0 -160 -275 0 c-177 0 -275 4 -275 10 0 6 95 10 265 10
                                    l265 0 0 150 c0 93 4 150 10 150 6 0 10 -60 10 -160z"/>
                      <path d="M107 473 c-4 -3 -7 -17 -7 -30 0 -15 -9 -27 -25 -35 -23 -10 -25 -17
                                    -25 -74 0 -57 2 -63 22 -66 17 -2 24 -12 28 -33 l5 -30 190 -2 190 -3 15 33
                                    c9 20 24 33 38 35 20 3 22 9 22 67 0 61 -1 63 -29 73 -21 7 -31 19 -36 41 l-7
                                    31 -187 0 c-103 0 -191 -3 -194 -7z m377 -39 c4 -16 18 -30 36 -37 27 -10 30
                                    -16 30 -57 0 -40 -4 -47 -30 -62 -17 -9 -35 -29 -40 -43 l-10 -25 -174 0 -173
                                    0 -7 30 c-3 19 -15 34 -31 42 -22 10 -25 18 -25 58 0 40 3 49 21 53 11 3 25
                                    19 32 36 l11 31 177 0 177 0 6 -26z"/>
                      <path d="M229 411 c-23 -24 -29 -38 -29 -74 0 -110 145 -144 196 -46 53 104
                                    -84 202 -167 120z m130 -7 c25 -21 31 -33 31 -65 0 -86 -100 -123 -154 -58
                                    -35 41 -34 83 3 120 37 37 79 38 120 3z"/>
                      <path d="M270 393 c43 -14 44 -16 15 -23 -24 -6 -25 -8 -7 -9 27 -1 30 -21 2
                                    -21 -28 0 -25 -11 10 -45 31 -30 42 -25 13 7 -9 10 -14 20 -12 21 55 41 60 47
                                    45 47 -21 0 -21 17 2 23 9 3 -5 5 -33 5 -27 0 -43 -2 -35 -5z"/>
                    </g>
                  </svg>


                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Resonable Cost</h2>
                <p className="leading-relaxed text-base">We Charge Clients Resonablly and their needs </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in" >
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="60.000000pt" height="60.000000pt" viewBox="0 0 60.000000 60.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                      <path d="M80 578 c0 -7 -12 -22 -27 -32 -14 -11 -23 -14 -19 -8 4 7 3 12 -3
                                        12 -25 0 -31 -47 -31 -237 0 -233 0 -234 81 -239 50 -3 51 -2 12 5 -73 13 -73
                                        13 -73 197 l0 164 139 0 c83 0 142 4 146 10 3 6 21 17 38 26 31 14 23 5 -20
                                        -23 -15 -10 8 -12 120 -10 l137 2 1 -105 c3 -195 0 -223 -22 -243 -21 -17 -99
                                        -25 -99 -9 0 4 7 27 16 51 30 86 -14 181 -99 217 -24 10 -48 27 -53 38 -12 27
                                        -36 27 -48 0 -5 -12 -25 -27 -43 -33 -72 -26 -130 -121 -119 -193 4 -22 13
                                        -53 22 -70 25 -49 144 -113 144 -77 0 5 -4 7 -10 4 -5 -3 -17 -2 -26 3 -15 8
                                        -15 10 1 15 9 4 24 3 34 -2 10 -6 23 -6 32 0 29 18 33 8 4 -11 l-30 -20 29 0
                                        c16 0 35 8 43 18 8 9 12 11 8 5 -10 -21 12 -15 44 13 25 21 42 26 95 27 38 1
                                        71 7 78 15 15 15 24 428 10 450 -5 7 -23 14 -40 14 -24 1 -32 6 -32 20 0 10
                                        -4 18 -10 18 -5 0 -10 -9 -10 -20 0 -15 -7 -20 -25 -20 -18 0 -25 5 -25 20 0
                                        11 -4 20 -10 20 -5 0 -10 -8 -10 -19 0 -12 -9 -20 -25 -23 -21 -4 -25 -1 -25
                                        18 0 29 -16 32 -23 4 -3 -12 -14 -20 -26 -20 -14 0 -21 6 -21 20 0 26 -16 26
                                        -23 1 -6 -26 -47 -24 -47 1 0 10 -4 18 -10 18 -5 0 -10 -9 -10 -21 0 -15 -4
                                        -19 -16 -15 -9 3 -20 6 -25 6 -5 0 -9 7 -9 15 0 8 -4 15 -10 15 -5 0 -10 -8
                                        -10 -18 0 -13 -8 -18 -25 -18 -17 0 -25 5 -25 18 0 20 -20 25 -20 6z m60 -42
                                        c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m60 0 c0 -2 -7 -6
                                        -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m350 0 c0 -2 -7
                                        -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m25 -25 c3 -5 0 -13 -6 -17 -8
                                        -5 -9 -3 -4 6 6 10 4 12 -9 7 -10 -4 -15 -3 -11 3 8 13 22 13 30 1z m-478 -33
                                        c0 -7 -11 -14 -24 -14 -22 -2 -23 -1 -6 12 23 17 30 17 30 2z m180 -3 c0 -8
                                        -2 -13 -5 -10 -3 2 -14 0 -26 -6 -19 -9 -19 -8 3 10 28 25 28 25 28 6z m217 4
                                        c-4 -7 0 -9 12 -5 25 8 53 -9 29 -17 -9 -4 -13 -3 -10 3 9 14 -9 12 -23 -2 -9
                                        -9 -12 -9 -12 0 0 6 -7 9 -17 5 -15 -5 -14 -3 2 10 24 19 29 21 19 6z m-359
                                        -9 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m305 6 c0 -2 -7
                                        -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m-194 -131 c-11 -8 -24 -15
                                        -30 -15 -5 0 -1 7 10 15 10 8 24 14 29 14 6 0 1 -6 -9 -14z m118 -7 c-5 -8 -2
                                        -9 10 -5 11 5 15 3 10 -5 -5 -8 -1 -9 12 -4 10 4 15 4 11 0 -4 -4 1 -12 10
                                        -19 13 -9 13 -14 3 -20 -8 -5 -11 -4 -7 2 4 6 -12 18 -34 28 -28 13 -36 21
                                        -27 27 18 11 20 10 12 -4z m-76 -34 c7 -13 13 -14 28 -6 13 8 14 11 5 12 -8 0
                                        -12 3 -9 6 3 3 22 -1 41 -10 50 -20 87 -96 55 -109 -10 -4 -9 -8 2 -16 21 -14
                                        1 -67 -24 -63 -13 3 -16 -1 -12 -16 5 -14 -1 -22 -19 -30 -35 -16 -45 -15 -45
                                        6 -1 16 -2 16 -14 -1 -13 -17 -16 -17 -45 -3 -22 12 -28 21 -24 33 5 12 2 15
                                        -10 10 -12 -4 -21 2 -32 24 -15 29 -15 31 7 49 22 17 22 18 3 17 -15 -2 -19 3
                                        -17 18 5 29 21 45 39 38 12 -5 14 -1 9 14 -5 14 0 23 16 31 31 15 36 14 46 -4z
                                        m167 -52 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-300 -32
                                        c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m-10 -47 c-1 -16 3
                                        -32 9 -36 7 -6 6 -7 -3 -5 -16 5 -28 68 -13 68 5 0 8 -12 7 -27z m318 -15 c-4
                                        -7 -8 -17 -8 -22 0 -5 -7 -11 -15 -13 -13 -4 -13 -3 0 6 8 6 11 11 6 11 -5 0
                                        -3 7 4 15 15 18 24 20 13 3z m-298 -47 c-3 -5 4 -12 15 -16 20 -6 19 -25 -1
                                        -25 -6 0 -8 4 -5 9 3 5 -1 12 -10 15 -13 5 -12 26 2 26 3 0 3 -4 -1 -9z m284
                                        -4 c-2 -1 -13 -9 -24 -17 -19 -14 -19 -14 -6 3 7 9 18 17 24 17 6 0 8 -1 6 -3z
                                        m-234 -47 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4
                                        -10z"/>
                      <path d="M342 248 c-28 -22 -39 -39 -36 -50 3 -10 1 -18 -5 -18 -5 0 -11 8
                                        -14 18 -4 16 -4 16 -12 -2 -5 -12 -3 -21 6 -27 20 -12 31 -7 49 25 8 15 27 35
                                        42 44 17 11 24 22 19 30 -6 10 -18 4 -49 -20z"/>
                      <path d="M218 164 c-32 -17 -33 -20 -13 -28 8 -3 14 -1 12 4 -1 5 7 16 18 24
                                        25 19 18 20 -17 0z"/>
                      <path d="M240 100 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
                    </g>
                  </svg>

                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Dead Lines</h2>
                <p className="leading-relaxed text-base">We Follow Strict Dead Lines,We Will Deliver Project On Time</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 ease-in">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M235 581 c-48 -22 -79 -54 -100 -103 -29 -70 -21 -103 49 -207 31
                                            -45 36 -61 36 -110 0 -53 3 -59 39 -94 22 -20 45 -37 51 -37 6 0 29 17 51 37
                                            36 35 39 41 39 94 0 49 5 65 36 110 71 106 79 141 45 214 -45 98 -152 140
                                            -246 96z m138 -15 c44 -18 95 -78 103 -121 9 -48 -1 -78 -45 -144 -21 -31 -41
                                            -66 -45 -78 -10 -31 -66 -33 -66 -3 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20 0
                                            -30 -56 -28 -66 3 -4 12 -24 47 -45 78 -21 31 -41 68 -45 83 -10 42 5 94 39
                                            133 53 60 122 78 190 49z m-8 -395 c-11 -4 -44 -11 -72 -14 -43 -5 -53 -3 -53
                                            8 0 12 15 15 73 14 46 0 65 -3 52 -8z m15 -30 c0 -10 -35 -21 -72 -21 -15 0
                                            -30 -5 -34 -11 -5 -9 8 -10 45 -7 42 4 49 3 40 -8 -16 -19 -84 -18 -103 2 -30
                                            30 -26 32 74 47 45 7 50 7 50 -2z"/>
                      <path d="M253 538 c-27 -13 -31 -33 -5 -23 9 4 34 9 55 12 20 3 37 10 37 14 0
                                            12 -60 10 -87 -3z"/>
                      <path d="M370 520 c0 -5 9 -14 20 -20 22 -12 27 -1 8 18 -14 14 -28 16 -28 2z" />
                      <path d="M260 371 c0 -13 29 -35 37 -28 7 8 -15 37 -28 37 -5 0 -9 -4 -9 -9z" />
                      <path d="M322 357 c-23 -24 -32 -97 -12 -97 6 0 10 15 10 33 0 21 8 41 20 52
                                            21 19 26 35 12 35 -5 0 -18 -10 -30 -23z"/>
                      <path d="M54 505 c22 -17 46 -20 46 -6 0 10 -25 21 -48 21 -15 -1 -14 -3 2
                                            -15z"/>
                      <path d="M533 513 c-7 -2 -13 -9 -13 -14 0 -14 24 -11 46 6 19 14 19 14 -1 14
                                            -11 0 -26 -3 -32 -6z"/>
                      <path d="M0 410 c0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -18 10 -40 10 -22 0
                                            -40 -4 -40 -10z"/>
                      <path d="M540 410 c0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -18 10 -40 10 -22
                                            0 -40 -4 -40 -10z"/>
                      <path d="M54 315 c-16 -12 -17 -14 -2 -15 23 0 48 11 48 21 0 14 -24 11 -46
                                            -6z"/>
                      <path d="M520 321 c0 -10 25 -21 48 -21 15 1 14 3 -2 15 -22 17 -46 20 -46 6z" />
                    </g>
                  </svg>

                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Creative</h2>
                <p className="leading-relaxed text-base">We Have Creative Minds That Create Amazing Things.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300 ease-in">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="60.000000pt" height="60.000000pt" viewBox="0 0 60.000000 60.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M303 548 c-27 -35 -144 -269 -138 -278 3 -5 33 -10 66 -10 l60 0 -6-32 c-21 -127 -25 -172 -16 -181 5 -5 14 -6 20 -3 17 11 153 275 146 286 -3 5-33 10 -66 10 l-60 0 6 33 c18 109 25 169 20 178 -8 13 -21 11 -32 -3z" />
                      <path d="M84 509 c-3 -6 7 -25 25 -42 24 -25 33 -29 43 -19 9 9 6 18 -17 42-31 33 -40 36 -51 19z" />
                      <path d="M465 490 c-23 -24 -26 -33 -17 -42 10 -10 19 -6 43 19 18 17 28 36 25 42 -11 17 -20 14 -51 -19z" />
                      <path d="M105 130 c-23 -24 -26 -33 -17 -42 10 -10 19 -6 43 19 18 17 28 36 25 42 -11 17 -20 14 -51 -19z" />
                      <path d="M444 149 c-3 -6 7 -25 25 -42 24 -25 33 -29 43 -19 9 9 6 18 -17 42-31 33 -40 36 -51 19z" />
                    </g>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Energitic</h2>
                <p className="leading-relaxed text-base">We Have Energitic Team And Young Candidates With Great Skillset</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4  ">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-yellow-400 hover:text-white transition duration-300 ease-in">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M90 750 c0 -6 58 -10 155 -10 155 0 211 -10 230 -40 5 -7 -14 -34
                                        -49 -69 -61 -62 -68 -82 -34 -105 45 -32 119 -12 173 44 23 24 37 30 72 30 24
                                        0 43 5 43 10 0 6 -22 10 -48 10 -41 0 -53 -5 -78 -31 -54 -57 -126 -77 -154
                                        -43 -12 13 -3 26 61 91 41 41 88 81 106 89 23 10 77 14 188 14 97 0 155 4 155
                                        10 0 6 -59 10 -158 10 -147 0 -162 -2 -205 -24 l-47 -23 -47 23 c-43 22 -58
                                        24 -205 24 -99 0 -158 -4 -158 -10z"/>
                      <path d="M600 573 c0 -4 37 -44 81 -89 57 -58 80 -87 76 -98 -11 -28 -37 -30
                                        -62 -6 -32 30 -45 17 -15 -15 41 -44 -1 -86 -45 -45 -32 30 -45 17 -15 -15 41
                                        -44 -1 -86 -45 -45 -33 31 -45 17 -15 -15 19 -21 22 -30 14 -43 -17 -27 -47
                                        -20 -69 15 -11 18 -30 36 -42 39 -12 3 -24 17 -27 30 -4 14 -16 26 -30 30 -14
                                        3 -27 16 -30 30 -4 14 -16 26 -30 30 -13 3 -27 15 -30 27 -3 12 -26 34 -50 50
                                        -36 22 -55 27 -110 27 -37 0 -66 -4 -66 -10 0 -6 29 -10 68 -10 74 0 101 -13
                                        76 -37 -27 -27 -6 -83 31 -83 7 0 16 -11 19 -25 4 -15 16 -27 30 -31 14 -3 27
                                        -16 30 -30 4 -14 16 -26 31 -30 14 -3 25 -12 25 -19 0 -36 57 -58 82 -32 10
                                        11 17 11 40 -2 31 -18 56 -9 72 26 5 11 19 24 30 29 12 5 25 18 30 30 5 11 19
                                        25 30 30 12 5 25 19 31 32 5 12 15 22 21 22 16 0 44 34 44 55 0 9 -37 55 -82
                                        101 -76 78 -98 95 -98 77z m-305 -183 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28
                                        12 -10 26 4 48 28 44 17 -2 23 -10 23 -28z m60 -60 c0 -18 -6 -26 -23 -28 -13
                                        -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23 -10 23 -28z m60 -60 c0 -18 -6
                                        -26 -23 -28 -24 -4 -38 18 -28 44 3 9 15 14 28 12 17 -2 23 -10 23 -28z m60
                                        -60 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23
                                        -10 23 -28z"/>
                      <path d="M821 501 c0 -19 -8 -43 -18 -53 -9 -10 -13 -21 -9 -26 4 -4 16 3 26
                                        16 13 15 29 22 54 22 20 0 36 5 36 10 0 6 -18 10 -39 10 -36 0 -40 3 -44 28
                                        -4 24 -4 23 -6 -7z"/>
                      <path d="M540 516 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z" />
                      <path d="M580 477 c0 -2 15 -16 33 -33 l32 -29 -29 33 c-28 30 -36 37 -36 29z" />
                      <path d="M555 380 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23
                                        20 -3 0 3 -9 13 -20z"/>
                      <path d="M480 335 c19 -19 36 -35 39 -35 3 0 -10 16 -29 35 -19 19 -36 35 -39
                                        35 -3 0 10 -16 29 -35z"/>
                    </g>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ">Trust</h2>
                <p className="leading-relaxed text-base">We Want Develope Longterm Trust With Our Clients.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 hover:text-white transition duration-300 ">
              <div className="border border-gray-200 p-6 rounded-lg hover:bg-violet-400">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="60.000000pt" height="60.000000pt" viewBox="0 0 60.000000 60.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M272 588 c-6 -6 -12 -18 -12 -24 0 -8 -16 -14 -37 -16 -36 -3 -38 -5
                                            -41 -38 -2 -25 -9 -38 -25 -45 -30 -13 -30 -57 0 -70 16 -7 23 -20 25 -45 l3
                                            -35 115 0 115 0 3 35 c2 25 9 38 25 45 30 13 30 57 0 70 -16 7 -23 20 -25 45
                                            -3 32 -6 35 -38 38 -25 2 -38 9 -45 25 -11 25 -44 34 -63 15z m41 -37 c-3 -19
                                            2 -21 42 -21 l45 0 0 -45 c0 -40 2 -45 23 -42 14 1 22 -3 22 -13 0 -10 -8 -14
                                            -22 -13 -21 3 -23 -2 -23 -42 l0 -45 -100 0 -100 0 0 45 c0 40 -2 45 -22 42
                                            -15 -1 -23 3 -23 13 0 10 8 14 23 13 20 -3 22 2 22 42 l0 45 46 0 c38 0 45 3
                                            40 16 -3 9 -3 20 0 25 10 17 29 3 27 -20z"/>
                      <path d="M291 439 c-13 -39 -14 -49 -2 -49 8 0 31 52 31 71 0 21 -19 6 -29
                                            -22z"/>
                      <path d="M230 445 c-10 -12 -10 -18 0 -30 19 -23 27 -18 27 15 0 33 -8 38 -27
                                            15z"/>
                      <path d="M343 430 c0 -33 8 -38 27 -15 10 12 10 18 0 30 -19 23 -27 18 -27
                                            -15z"/>
                      <path d="M92 278 c-6 -6 -12 -18 -12 -24 0 -8 -16 -14 -37 -16 l-38 -3 0 -115
                                            0 -115 115 0 115 0 3 52 c3 50 2 53 -20 50 -15 -1 -23 3 -23 13 0 10 8 14 23
                                            13 22 -3 23 0 20 50 -3 52 -3 52 -38 55 -25 2 -38 9 -45 25 -11 25 -44 34 -63
                                            15z m41 -37 c-3 -19 2 -21 42 -21 42 0 45 -2 45 -28 0 -19 -7 -30 -22 -37 -15
                                            -7 -23 -19 -23 -35 0 -16 8 -28 23 -35 15 -7 22 -18 22 -37 l0 -28 -100 0
                                            -100 0 0 100 0 100 46 0 c38 0 45 3 40 16 -3 9 -3 20 0 25 10 17 29 3 27 -20z"/>
                      <path d="M290 250 c0 -31 -3 -38 -15 -34 -21 9 -19 -10 5 -31 19 -17 21 -17
                                            40 0 24 21 26 40 5 31 -12 -4 -15 3 -15 34 0 22 -4 40 -10 40 -5 0 -10 -18
                                            -10 -40z"/>
                      <path d="M452 278 c-6 -6 -12 -18 -12 -24 0 -8 -16 -14 -37 -16 l-38 -3 -3
                                            -52 c-3 -50 -2 -53 20 -50 15 1 23 -3 23 -13 0 -10 -8 -14 -23 -13 -22 3 -23
                                            0 -20 -50 l3 -52 115 0 115 0 0 115 0 115 -35 3 c-25 2 -38 9 -45 25 -11 25
                                            -44 34 -63 15z m41 -37 c-3 -19 2 -21 42 -21 l45 0 0 -100 0 -100 -100 0 -100
                                            0 0 28 c0 19 7 30 23 37 14 7 22 19 22 35 0 16 -8 28 -22 35 -16 7 -23 18 -23
                                            37 0 27 2 28 46 28 38 0 45 3 40 16 -3 9 -3 20 0 25 10 17 29 3 27 -20z"/>
                    </g>
                  </svg>

                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Solutions & Support</h2>
                <p className="leading-relaxed text-base ">We Provdie Long term  Solutions , Support whenever needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>   
     
      <div className=' bg-[#000300] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className='p-5'>
          <ul>
            <p className='text-grey-800 font-bold text-3xl pb-6'>
              <span className='text-white'>MHTECHIN</span>
            </p>
            <div className='flex gap-6 pb-5'>
              {/*section for icons */}
              <FaFacebookSquare size={30} className="text-2xl cursor-pointer  text-blue-600" />
              <FaInstagramSquare size={30} className="text-2xl cursor-pointer text-red-500" />
              <FaTwitterSquare size={30} className="text-2xl cursor-pointer text-blue-300" />

            </div>
          </ul>
        </div>
        <div className='p-5'>
          <ul>
            <p className='text-white font-bold text-2xl pb-4'>Product</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Internship</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'><Link href = "https://docs.google.com/forms/d/e/1FAIpQLSeyjynPLl0qjaDhh8Liou1cYGYF2SVPoud1Z1aQKNdGZ-02iQ/viewform" legacyBehavior><a>carrer</a></Link></li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Team</li>
          </ul>

        </div>
        <div className='p-5'>
          <ul>
            <p className='text-white   font-bold text-2xl pb-4'>Company</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>FAQ</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Portfolio</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Clients</li>

          </ul>
        </div>
        <div className='p-5'>
          <ul>
            <p className='text-white   font-bold text-2xl pb-4'>Support</p>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'><Link href = "/about" legacyBehavior><a>About</a></Link></li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Contact Us</li>
            <li className='text-grey-500 text-md pb-2 font-semibold hover: text-blue-600 cursor-pointer'>Terms & conditions</li>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default index