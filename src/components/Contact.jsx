import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section
      className="w-full h-full p-2  flex justify-center items-center flex-col gap-3"
      id="contact">
      <div className="w-full"></div>
      <div className="lg:w-10/12 w-full flex justify-center gap-2 items-center flex-col">
        <div className="w-full text-3xl font-bold text-center mt-3">
          Get In Toch
        </div>
        <div className="lg:w-10/12 w-full flex-col p-2 flex gap-3">
          <p className="text-center text-lg text-gray-400">
            If you are interested in my portfolio and projects, you can contact
            the information below. Thank you for your attention in reading or
            viewing my portfolio
          </p>
          <div className="w-full p-2 flex flex-col gap-3">
            <input
              type="text"
              name=""
              className="input input-bordered w-full p-2 h-12 rounded-lg bg-white text-neutral"
              id=""
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              className="textarea rounded-lg p-2 textarea-bordered w-full bg-white text-neutral"
              rows="10"
              placeholder="Message"></textarea>
            <div className="w-full flex justify-end">
              <button className="btn bg-slate-800 text-white border-none ">
                Submit <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
