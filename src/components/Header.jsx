
const Header = () => {
  return (
    <>
      <section
        className="w-full flex justify-center p-4 flex-col lg:h-screen h-full mt-15 gap-5 items-center"
        id="home">
        <div
          className="w-full h-12 lg:hidden block"></div>
        <div
          className="lg:w-10/12 flex-col lg:flex-row w-full flex justify-between items-center h-full">
          <div
            className="lg:w-3/5 w-full p-4 lg:p-2 lg:ms-4 md:ms-3">
            <p
              className="font-bold text-3xl normal-case text-purple-700">
              firmansyah
            </p>
            <p className="text-2xl mt-1 font-bold">
              Web Development
            </p>
            <p className="mt-4 text-lg">
              I have a strong interest in a
              career in web development. To be
              able to pursue a career in web
              development, I continuously strive
              to improve my skills. My current
              foundational skills include HTML,
              CSS, PHP, JavaScript, Bootstrap,
              Tailwind, MySQL, Laravel, React Js, Node Js, Express js, NoSQL(MongoDb). I will
              continue to work on enhancing and
              expanding my skillset.
            </p>
          </div>
          <div
            className="flex items-center lg:w-1/2 justify-center w-full mt-2 lg:mt-0">
            <img
              src="/img/bg1web.png"
              data-aos="flip-down"
              className="w-80"
              alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header