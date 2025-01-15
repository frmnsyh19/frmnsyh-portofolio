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
      <div className="lg:w-10/12 flex justify-center items-center w-full gap-2 mt-4">
        <p className="text-4xl">🚀</p>
        <p className="text-4xl font-bold">Project</p>
      </div>
      <div className="w-full mt-2  lg:w-11/12 lg:flex-row flex-col flex justify-center items-center flex-wrap gap-3 p-3">
        <div
          className="w-80 p-2 h-[32rem] rounded-lg flex flex-col justify-between shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <div className="w-full gap-1 flex flex-col p-2">
            <img src="/project/weddingproject.png" className="w-full" alt="" />
            <p className="text-lg lg:text-xl font-bold capitalize">
              Sistem Informasi Penyewaan Wedding Organizer
            </p>
            <p className="text-lg text-gray-400">
              This website is designed to simplify the management of wedding
              organizer rental services for both service providers and
              customers. The system supports features such as service search,
              package booking, and event schedule management.
            </p>
          </div>
          <div className="w-full mt-2 p-2 flex gap-3">
            <img src="/skill_image/laravel.png" alt="" className="w-8" />
            <img
              src="/skill_image/Bootstrap_logo.svg.png"
              alt=""
              className="w-8"
            />
            <img src="/skill_image/jquery.png" alt="" className="w-8" />
            <img src="/skill_image/mysqllogo.png" alt="" className="w-8" />
          </div>
        </div>

        <div
          className="w-80 p-2 h-[32rem] rounded-lg flex flex-col  shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <div className="w-full gap-1 flex flex-col p-2">
            <img
              src="/project/newprojectexpress.png"
              className="w-full"
              alt=""
            />
            <p className="text-lg lg:text-xl font-bold capitalize">
              Sistem Kasir & Stok Barang
            </p>
            <p className="text-lg text-gray-400">
              This website is designed to assist in managing sales transactions
              and inventory efficiently. The application combines cashier
              functionality, inventory management, and financial reporting into
              a responsive and user-friendly web-based platform.
            </p>
          </div>
          <div className="w-full mt-2 flex gap-2 h-full p-2 items-center">
            <img src="/skill_image/mongodb.png" alt="" className="w-8" />
            <img src="/skill_image/tailwind.png" alt="" className="w-8" />
            <img src="/skill_image/react.png" alt="" className="w-8" />
            <img src="/skill_image/nodejs.png" alt="" className="w-8" />
            <img src="/skill_image/Expressjs.png" alt="" className=" w-16" />
          </div>
        </div>

        <div
          className="w-80 h-[32rem] p-2 rounded-lg flex flex-col justify-start shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <img src="/project/rajabtour.png" className="w-full" alt="" />
          <div className="w-full gap-1 flex flex-col p-2">
            <p className="text-lg lg:text-xl font-bold capitalize">
              Tour & Travel
            </p>
            <p className="text-lg text-gray-400">
              This real project website was designed for a travel agency client
              to facilitate tourists in searching, selecting, and booking travel
              packages according to their needs. With a modern and responsive
              design, the website provides an intuitive and user-friendly
              experience across various devices.
            </p>
            <div className="w-full mt-2 flex gap-2">
              <img src="/skill_image/laravel.png" alt="" className="w-8" />
              <img src="/skill_image/tailwind.png" alt="" className="w-8" />
              <img src="/skill_image/mysqllogo.png" alt="" className="w-8" />
            </div>
          </div>
        </div>
        <div
          className="w-80 p-2 h-[32rem] rounded-lg flex flex-col justify-between shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <div className="w-full gap-1 flex flex-col p-2">
            <img src="/project/lifeport.png" className="w-full" alt="" />
            <p className="text-lg lg:text-xl font-bold capitalize">LifePort</p>
            <p className="text-lg text-gray-400">
              This project is the development of a news portal website for a
              client, aimed at delivering the latest information to users. The
              portal features various news categories such as health, sports,
              technology, and food, catering to readers with diverse interests.
            </p>
          </div>
          <div className="w-full mt-2 flex gap-2 p-2">
            <img src="/skill_image/nextjs.png" alt="" className="w-8" />
            <img src="/skill_image/tailwind.png" alt="" className="w-8" />
          </div>
        </div>
        <div
          className="w-80 p-2 h-[32rem] rounded-lg flex flex-col justify-between shadow-xl border"
          id="cardproject"
          data-aos="zoom-in-up">
          <div className="w-full gap-1 flex flex-col p-2">
            <img src="/project/sneckers.png" className="w-full" alt="" />
            <p className="text-lg lg:text-xl font-bold capitalize">
              E-Commerce Shoes
            </p>
            <p className="text-lg text-gray-400">
              Our sneaker e-commerce website is fully integrated with leading
              payment gateways, providing a fast, secure, and seamless shopping
              experience. With a secure payment system, customers can
              confidently and comfortably complete their transactions.
            </p>
          </div>
          <div className="w-full mt-2 flex gap-2 p-2">
            <img src="/skill_image/nextjs.png" alt="" className=" w-8 h-8" />
            <img src="/skill_image/tailwind.png" alt="" className="w-9 h-8" />
            <img src="/skill_image/postgresql.png" alt="" className=" w-8" />
            <img src="/skill_image/firebase.png" alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
