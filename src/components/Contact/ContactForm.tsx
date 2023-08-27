import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Typewriter } from "react-simple-typewriter";
import { icons } from "../../constant/Const";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm("plla2", "template1", e.currentTarget, "91CvirVwBqwdAQu5m")
        .then(
          () => {
            if (formRef.current) {
              formRef.current.reset();
              alert(
                "Contact 주셔서 감사합니다! 확인 후 바로 연락드리겠습니다!!"
              );
            }
          },
          (error) => {
            alert(`${error} 해당 에러가 발생하였으니, 재시도 해주세요!!`);
          }
        );
    }
  };
  return (
    <div className="w-[80%] h-[96%] shadow-lg">
      <div>
        <h2
          style={{ fontFamily: "GmarketBold" }}
          className="noselect message text-2xl bg-primary-500 px-2 py-4 rounded-t-xl text-grayscale-100 text-center relative shadow-2xl"
        >
          <Typewriter
            words={["Let's get in touch!!"]}
            loop={true}
            typeSpeed={130}
            deleteSpeed={100}
          />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center mt-8">
        <form
          id="contact_form"
          ref={formRef}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          className="w-[80%] h-full flex flex-col gap-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col mb-3 shadow-xl">
            <label
              htmlFor="Name"
              className="font-semibold text-[#FFF8CD] tracking-wider"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="Name"
              required
              className="relative p-[0.7em] mt-2 rounded-md text-grayscale-950 focus:outline-none focus:border-[#d6a8e9] focus:shadow-2xl bg-[#FFF6E0] border-2 border-[#FFBFBF]"
              placeholder="회사이름 및 성함을 입력해주세요."
              autoComplete="Name"
            />
          </div>
          <div className="w-full flex flex-col mb-3 shadow-xl">
            <label
              htmlFor="E-mail"
              className="font-semibold text-[#FFF8CD] tracking-wider"
            >
              E-mail
            </label>
            <input
              type="email"
              name="user_email"
              id="E-mail"
              required
              className="p-[0.7em] mt-2 rounded-md text-grayscale-950 focus:outline-none focus:border-[#d6a8e9] focus:shadow-2xl focus:border-2 bg-[#FFF6E0] border-2 border-[#FFBFBF]"
              placeholder="이메일을 입력해주세요."
              autoComplete="E-mail"
            />
          </div>
          <div className="w-full flex flex-col mb-3 shadow-xl">
            <label
              htmlFor="message"
              className="font-semibold text-[#FFF8CD] tracking-wider"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="p-[1em] mt-2 rounded-md text-grayscale-950 focus:outline-none focus:border-[#d6a8e9] focus:shadow-2xl focus:border-2 bg-[#FFF6E0] border-2 border-[#FFBFBF]"
              placeholder="메세지를 입력해주세요..."
              autoComplete="message"
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="icon text-xl bg-primary-600 text-grayscale-0 px-[1em] py-[0.7em] pl-[0.9em] flex items-center rounded-xl overflow-hidden border-2 border-primary-400 transition-all duration-200 hover:border-2 hover:border-primary-400"
              type="submit"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <img
                    src={icons.sendIcon}
                    alt="보내기 아이콘"
                    className=" block origin-center transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
              <span className="block ml-[0.3em] transition-all duration-300 ease-in-out">
                Send
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
