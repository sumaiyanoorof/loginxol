import React, { Fragment } from "react";
import logoImg_1 from '../assets/logo1.png';
import logoImg_2 from '../assets/logo2.png';
import logoImg_3 from '../assets/logo3.png';
import logoImg_4 from '../assets/logo4.png';
import logoImg_5 from '../assets/logo5.png';
import logoImg_6 from '../assets/logo6.png';
import logoImg_7 from '../assets/logo7.png';
import logoImg_8 from '../assets/logo8.png';
import logoImg_9 from '../assets/logo9.png';
import logoImg_10 from '../assets/logo10.png';
import logoImg_11 from '../assets/logo11.png';
import logoImg_12 from '../assets/logo12.png';
import logoImg_13 from '../assets/logo13.png';
import logoImg_14 from '../assets/logo14.png';
import logoImg_15 from '../assets/logo15.png';
import logoImg_16 from '../assets/logo16.png';
import logoImg_17 from '../assets/logo17.png';
import logoImg_18 from '../assets/logo18.png';
import logoImg_19 from '../assets/logo19.png';
import logoImg_20 from '../assets/logo20.png';
import logoImg_21 from '../assets/logo21.png';
import logoImg_22 from '../assets/logo22.png';
import logoImg_23 from '../assets/logo23.png';
import logoImg_24 from '../assets/logo24.png';
import logoImg_25 from '../assets/logo25.png';
import logoImg_26 from '../assets/logo26.png';
import logoImg_27 from '../assets/logo27.png';
import logoImg_28 from '../assets/logo28.png';

const techstack = [
  { name: "Ahmed Grocers", icon: "logoImg_1" },
  { name: "Almass Medical Center", icon: "logoImg_2" },
  { name: "Azam Medical Center", icon: "logoImg_3" },
  { name: "Iplanet BPO", icon: "logoImg_4" },
  { name: "Capton Shipping LLC", icon: "logoImg_5" },
  { name: "Fitness Factory", icon: "logoImg_6" },
  { name: "Golden Era", icon: "logoImg_7" },
  { name: "Happy Donuts", icon: "logoImg_8" },
  { name: "Johar Electronics", icon: "logoImg_9" },
  { name: "Leadcrew", icon: "logoImg_10" },
  { name: "The Leadership School", icon: "logoImg_11" },
  { name: "Neurospinal & Cancer Care", icon: "logoImg_12" },
  { name: "Pak Apparels", icon: "logoImg_13" },
  { name: "Pluto Shipping LLC", icon: "logoImg_14" },
  { name: "Rahnuma Coaching", icon: "logoImg_15" },
  { name: "Roshan Khan Foundation", icon: "logoImg_16" },
  { name: "Romail's", icon: "logoImg_17" },
  { name: "Rehan Aarib Marketing", icon: "logoImg_18" },
  { name: "Sindh Building Control Aith", icon: "logoImg_19" },
  { name: "Sir Baby Cycle", icon: "logoImg_20" },
  { name: "Swiss Shipping LLC", icon: "logoImg_21" },
  { name: "Shaista Medical Center", icon: "logoImg_22" },
  { name: "Sapphire", icon: "logoImg_23" },
  { name: "Shaikh Zayed Hospital", icon: "logoImg_24" },
  { name: "Tracking Plus", icon: "logoImg_25" },
  { name: "Waqas Traders", icon: "logoImg_26" },
  { name: "Yashfeen Medical Centre", icon: "logoImg_27" },
  { name: "Zeeshan Enterprises", icon: "logoImg_28" },
];

const LogoCarousel = () => {
  return (
    <section className="overflow-x-clip py-20 lg:py-2  ">
      <div className="-mx-1 -rotate-3 flex gap-8 whitespace-nowrap bg-gradient-to-r from-teal-300 to-blue-400  ">
        <div className="flex mask-gradient-right">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {techstack.map((tech) => (
                  <div className="inline-flex items-center gap-20 " key={tech}>
                     <img
                      src={logoImg_1}
                      alt=""
                      className="size-20 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_2}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_3}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_4}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_5}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_6}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_7}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_8}
                      alt={tech.name}
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_9}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_10}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_11}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_12}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_13}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_14}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_15}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_16}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_17}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_18}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_19}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_20}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_21}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_22}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_23}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_24}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_25}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_26}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_27}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <img
                      src={logoImg_28}
                      alt=""
                      className="size-28 -rotate-12 text-gray-800"
                    />
                    <span className="block mt-2 text-sm font-extrabold uppercase text-gray-800">
                      {techstack.icon}
                    </span>
                   
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
