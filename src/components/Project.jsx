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
        <div className=" w-full flex justify-center flex-wrap  gap-5">
          <a className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/weddingproject.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">
                Penyewaan Wedding Organizer
              </p>
            </div>
          </a>
          <a className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/rajabtour.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">Rajab Tour & Travel</p>
            </div>
          </a>
          <a className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/dwika.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">Dwika Travel</p>
            </div>
          </a>
          <a
            href="https://al-quran-qu.vercel.app/"
            className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/alquranproject.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">{`Al-Qur'an Digital`}</p>
            </div>
          </a>
          <a
            href="https://life-port.vercel.app/"
            className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/lifeport.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">LifePort (Portal Berita)</p>
            </div>
          </a>
          <a
            href="https://sneckersku-frmnsyh.vercel.app/"
            className=" bg-base-200 cursor-pointer rounded-3xl shadow-2xl w-[24rem] flex p-3 flex-col gap-2">
            <div className=" w-full rounded-3xl bg-blue-300 flex items-center justify-center">
              <img src="/project/sneckersku.png" className=" w-56" alt="" />
            </div>
            <div className=" w-full p-2">
              <p className=" text-xl font-semibold">SneckersKu.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
