import ReactModal from "react-modal";
import { ContentTypes } from "./Types";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { close } from "../../assets";
import "./styles.css";

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
  const {
    mywork: works,
    stackCause: stackCauses,
    troubleShootings: troubleShoots,
  } = item;

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
      className="custom-modal-content"
      overlayClassName="custom-modal-overlay"
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
          <div className="container__child">
            <div className="thumbnail__content">
              {item.modalImg.map((modalImg, index) => (
                <img
                  key={index}
                  src={modalImg}
                  alt="프로젝트 이미지"
                  className="rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className="thumbnail__links">
              {[
                { label: "GITHUB", link: item.github },
                { label: "DEMO", link: item.demo },
              ].map((button, index) => (
                <m.button
                  key={index}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#8D7B68" }}
                  whileTap={{ scale: 0.9 }}
                  className="link__button w-[150px] bg-[#A4907C] border-2 border-grayscale-950 py-2 rounded-md"
                  onClick={() => window.open(button.link)}
                >
                  {button.label === "GITHUB" ? (
                    <i className="fa fa-github"></i>
                  ) : (
                    <i className="fa-solid fa-globe"></i>
                  )}

                  <span className="ml-1">{button.label}</span>
                </m.button>
              ))}
            </div>
          </div>
          <div className="container__child1">
            <img
              src={close}
              alt="닫기 버튼"
              className="absolute w-6 h-6 right-[3%] top-5 cursor-pointer"
              onClick={handleCloseModal}
            />
            <span>
              <p className="modal__title w-[9rem] h-14 flex items-center justify-center rounded-md text-center text-xl font-semibold bg-[#C8B6A6] ">
                {item.name}
              </p>
              <p className="w-fit bg-[#9BABB8] px-3 rounded-full mt-2">
                {item.team}
              </p>
              <p className="w-fit bg-[#C8B6A6] p-2 px-4 rounded-lg mt-2">
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
              <p className="w-fit mt-4 font-semibold mb-1 border-b-2">
                주요 사용 스택 / 라이브러리
              </p>
              <p className="opacity-70">{item.stack}</p>
              <ul className="mt-4">
                {stackCauses.map((cause, index) => (
                  <li className="text-[#594545]" key={index}>
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
                회고, 트러블슈팅 블로깅
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
