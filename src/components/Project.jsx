import AOS from "aos";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section
      className="w-full h-full bg-slate-100 p-6 justify-center items-center flex flex-col gap-4"
      id="project">
      <div className="w-full h-12"></div>
      <div className="lg:w-10/12 flex justify-center items-center w-full gap-2 mt-4">
        <p className="text-4xl">🚀</p>
        <p className="text-4xl font-bold">Project</p>
      </div>
      <div className="w-full mt-2 lg:w-7/12 lg:flex-row flex-col flex justify-center items-center flex-wrap gap-3 p-3">
        <div
          className="w-80 p-2 rounded-lg flex flex-col justify-start shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <img src="/project/weddingproject.png" className="w-full" alt="" />
          <div className="w-full gap-1 flex flex-col p-2">
            <p className="text-lg lg:text-xl font-bold capitalize">
              Sistem Informasi Penyewaan Wedding Organizer
            </p>
            <p className="text-lg text-gray-400">
              Booking a wedding organizer website and information about the
              wedding organizer H. Sanwani
            </p>
            <div className="w-full mt-2 flex gap-3">
              <img src="/skill_image/laravel.png" alt="" className="w-6" />
              <img
                src="/skill_image/Bootstrap_logo.svg.png"
                alt=""
                className="w-6"
              />
              <img src="/skill_image/jquery.png" alt="" className="w-6" />
              <img src="/skill_image/mysqllogo.png" alt="" className="w-6" />
            </div>
          </div>
        </div>

        <div
          className="w-80 p-2 rounded-lg flex flex-col justify-start shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <img src="/project/newprojectexpress.png" className="w-full" alt="" />
          <div className="w-full gap-1 flex flex-col p-2">
            <p className="text-lg lg:text-xl font-bold capitalize">
              Sistem Kasir & Stok Barang
            </p>
            <p className="text-lg text-gray-400">
              A system designed to assist and enhance transaction processes
              while making data more dynamic in tracking the inflow and outflow
              of goods. This application is built using MongoDB, Express.js,
              React.js, and Node.js (MERN).
            </p>
            <div className="w-full mt-2 flex gap-2">
              <img src="/skill_image/mongodb.png" alt="" className="w-8" />
              <img src="/skill_image/tailwind.png" alt="" className="w-8" />
              <img src="/skill_image/react.png" alt="" className="w-8" />
              <img src="/skill_image/nodejs.png" alt="" className="w-8" />
              <img src="/skill_image/Expressjs.png" alt="" className=" w-16" />
            </div>
          </div>
        </div>

        <div
          className="w-80 p-2 rounded-lg flex flex-col justify-start shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <img
            src="/project/New_Pota-removebg-preview.png"
            className="w-full"
            alt=""
          />
          <div className="w-full gap-1 flex flex-col p-2">
            <p className="text-lg lg:text-xl font-bold capitalize">
              Portofolio
            </p>
            <p className="text-lg text-gray-400">
              {` This is a personal portfolio
              project that describes me.
              Contains a little about me, and
              some of the projects I've made.`}
            </p>
            <div className="w-full mt-2 flex gap-2">
              <img src="/skill_image/react.png" alt="" className="w-8" />
              <img src="/skill_image/tailwind.png" alt="" className="w-8" />
            </div>
          </div>
        </div>
        <div
          className="w-80 p-2 rounded-lg flex flex-col justify-start shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <img src="/project/lifeport.png" className="w-full" alt="" />
          <div className="w-full gap-1 flex flex-col p-2">
            <p className="text-lg lg:text-xl font-bold capitalize">LifePort</p>
            <p className="text-lg text-gray-400">
              This is a client project, a news portal website featuring news
              categories such as health, sports, technology, and food. The
              website is built using the Next.js framework and Tailwind CSS.
            </p>
            <div className="w-full mt-2 flex gap-2">
              <img src="/skill_image/nextjs.png" alt="" className="w-8" />
              <img src="/skill_image/tailwind.png" alt="" className="w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
