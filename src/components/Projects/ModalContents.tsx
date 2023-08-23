import ReactModal from "react-modal";
import { ContentTypes } from "./Types";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { close } from "../../assets";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      dumping: 5,
      stiffness: 50,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalContents = ({ item, showModal, handleCloseModal }: ContentTypes) => {
  const works = item.mywork;
  const stackCauses = item.stackCause;
  const troubleShoots = item.troubleShootings;
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: " rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100vh",
          zIndex: "9999",
          position: "fixed",
          top: "0",
          left: "0",
          overflow: "hidden",
        },
        content: {
          width: "65rem",
          height: "45rem",
          zIndex: "150",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "15px",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#E5E3C9",
          justifyContent: "center",
          overflow: "scroll",
        },
      }}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          style={{ display: "flex", height: "100vh" }}
        >
          <div className="container__child relative ml-8 mt-7 w-[50%] flex flex-col  ">
            <div className="thumbnail__content text-center z-10 w-full bg-primary-600 p-6 mb-5 rounded-lg">
              <img
                src={item.modalImg[0]}
                alt="프로젝트 이미지"
                className="rounded-lg"
              />
              <img
                src={item.modalImg[1]}
                alt="프로젝트 이미지"
                className="rounded-lg"
              />
              <img
                src={item.modalImg[2]}
                alt="프로젝트 이미지"
                className="rounded-lg"
              />
            </div>
            <div className="thumbnail__links relative z-10 flex w-full justify-between">
              <m.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#94B49F" }}
                whileTap={{ scale: 0.9 }}
                className="w-[150px] bg-primary-500 border-2 border-grayscale-950 py-2 rounded-md"
                onClick={() => window.open("https://github.com/plla2")}
              >
                <i className="fa fa-github"></i>
                <span className="ml-1">GITHUB</span>
              </m.button>
              <m.button
                className="w-[150px] ml-[10px] bg-primary-500 border-2 border-grayscale-950 py-2 rounded-md"
                onClick={() => window.open("https://github.com/plla2")}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#94B49F" }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fa fa-twitter"></i>
                <span className="ml-1">DEMO</span>
              </m.button>
            </div>
          </div>
          <div className="container__child w-full h-full text-[#191919] ml-8 mt-7">
            <img
              src={close}
              alt="닫기 버튼"
              className="absolute w-6 h-6 right-[3%] top-2 cursor-pointer"
              onClick={handleCloseModal}
            />
            <span>
              <p className="w-[9rem] h-14 flex items-center justify-center rounded-md text-center text-xl font-semibold bg-primary-500 ">
                {item.name}
              </p>
              <p className="w-fit bg-primary-500 px-3 rounded-full mt-2">
                {item.team}
              </p>
              <p className="w-fit bg-primary-500 p-2 px-4 rounded-lg mt-2">
                {item.description}
              </p>
            </span>
            <span>
              <p className="mb-1 w-fit mt-4 font-semibold border-b-2">
                프로젝트 기간
              </p>
              <p className="opacity-70">{item.date}</p>
            </span>
            <span>
              <p className="w-fit mt-4 font-semibold mb-1 border-b-2">Stack</p>
              <p className="opacity-70">{item.stack}</p>
              <ul className="mt-4">
                {stackCauses.map((cause, index) => (
                  <li className="text-[#5B9A8B]" key={index}>
                    {cause}
                  </li>
                ))}
              </ul>
            </span>
            <span>
              <p className="mb-1 w-fit mt-4 font-semibold border-b-2">
                나의 구현 기능
              </p>
              <ul className="list-disc">
                {works.map((item, index) => (
                  <li className="ml-3 opacity-70 mb-1" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </span>
            <span>
              <p className="mb-1 w-fit mt-4 font-semibold border-b-2">
                트러블 슈팅 경험
              </p>
              <ul className="list-disc">
                {troubleShoots.map((item, index) => (
                  <li className="mb-3 ml-3 opacity-70 " key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </span>
            <span>
              <p className="mb-1 w-fit mt-4 font-semibold border-b-2">
                회고 블로깅
              </p>
              <button
                onClick={() => window.open(`${item.review}`)}
                className="opacity-70 text-[#65451F]"
              >
                🔗 링크
              </button>
            </span>
            <div className="h-[20px]"></div>
          </div>
        </m.div>
      </LazyMotion>
    </ReactModal>
  );
};

export default ModalContents;
