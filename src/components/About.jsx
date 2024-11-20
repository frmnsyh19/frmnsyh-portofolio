const About = () => {
  return (
    <>
      <section
        className="w-full h-screen gap-3 flex flex-col justify-center items-center bg-slate-200"
        id="about">
        <div className="w-full lg:w-10/12 h-full gap-4 flex flex-col items-center justify-center">
          <div className="w-full flex justify-center gap-2">
            <p className="text-4xl">🧑‍💻</p>
            <p className="text-4xl font-bold">About Me</p>
          </div>
          <div className="text-sm lg:w-10/12 w-full p-2 lg:text-lg">
            <p className="text-center text-lg">
              "Graduated from a diploma three program in Information Technology
              at Bina Sarana Informatika University in 2021, and graduated from
              a bachelor's degree program in Information Technology at Nusa
              Mandiri University in 2023. Graduated with good grades, holding a
              certificate of proficiency in database system knowledge, achieving
              an expert rating, and possessing a BNSP competency certificate as
              a competent systems analyst."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
