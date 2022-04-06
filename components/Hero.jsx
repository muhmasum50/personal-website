import AOS from "aos";
import React, { useRef, useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <section id="hero" className="pt-36 xl:-mt-28">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary dark:text-slate-200 md:text-xl mb-1" 
                data-aos="zoom-out-right"
                data-aos-delay="1000">
              Hello guys 👌👌 I'm,
            </h1>
            <span className="block font-bold text-slate-900 dark:text-slate-100 text-4xl lg:text-4xl" data-aos="zoom-out-left"
                data-aos-delay="1000">
              Muhammad Ma'sum
            </span>
            <h2 className="font-medium text-secondary dark:text-slate-200 text-lg mb-5 lg:text-2xl" data-aos="fade-up"
                data-aos-delay="1000">
              FullStack Developer &
              <span className="text-slate-900 dark:text-slate-300"> Laravel Addict</span>
            </h2>
            <p className="font-medium text-lg text-secondary dark:text-slate-100 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="1000"> 
              أنا أحب الألعاب ، لا تسأل لماذا
              <br />
              <span className="font-bold text-slate-900 dark:text-slate-100"> Silent as smoke</span>
            </p>

            <a
            data-aos="zoom-out-left"
            data-aos-delay="1000"
              href="#"
              className="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:bg-slate-800 transition duration-300 ease-in-out"
            >
              Contact Me,
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src="/img/picture-1.png"
                alt="Muhammad Ma'sum"
                className="max-w-full mx-auto"
                data-aos="fade-left"
                data-aos-delay="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
