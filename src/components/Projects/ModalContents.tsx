import ReactModal from "react-modal";
import { ContentTypes } from "./Types";
import { LazyMotion, domAnimation, m } from "framer-motion";

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
                whileHover={{ scale: 1.1 }}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fa fa-twitter"></i>
                <span className="ml-1">DEMO</span>
              </m.button>
            </div>
          </div>
          <div className="container__child w-full h-full text-[#191919] ml-8">
            <span>
              <p>{item.name}</p>
              <p>{item.team}</p>
              <p>{item.description}</p>
            </span>
            <span>
              <p>프로젝트 기간</p>
              <p>{item.date}</p>
            </span>
            <span>
              <p>Stack</p>
              <p>{item.stack}</p>
              <ul>
                {stackCauses.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </span>
            <span>
              <p>나의 구현 기능</p>
              <ul>
                {works.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </span>
            <span>
              <p>트러블 슈팅 경험</p>
              <ul>
                {troubleShoots.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </span>
            <span>
              <p>회고 블로깅</p>
              <button onClick={() => window.open(`${item.review}`)}>
                링크
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
