import ReactModal from "react-modal";
import { ContentTypes } from "./Types";

const ModalContents = ({ item, showModal, handleCloseModal }: ContentTypes) => {
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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "15px",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#e9e9e9",
          justifyContent: "center",
          overflow: "auto",
        },
      }}
    >
      <div className="absolute top-0 right-0 left-0 overflow-hidden flex w-full h-full bg-primary-400 ">
        <div className="container__child signup__thumbnail relative ml-8 mt-8 items-center ">
          <div className="thumbnail__content text-center relative z-10 w-[46%] bg-primary-600 p-6 rounded-lg">
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
          <div className="thumbnail__links relative z-10">
            <ul className="list-inline text-center flex w-[30%] mt-4">
              <li>
                <button
                  className="w-[150px] ml-[10px] bg-primary-500 border-2 border-grayscale-950 py-2"
                  onClick={() => window.open("https://github.com/plla2")}
                >
                  <i className="fa fa-github"></i>
                  <span className="ml-1">GITHUB</span>
                </button>
              </li>
              <li>
                <button
                  className="w-[150px] ml-[10px] bg-primary-500 border-2 border-grayscale-950 py-2"
                  onClick={() => window.open("https://github.com/plla2")}
                >
                  <i className="fa fa-twitter"></i>
                  <span className="ml-1">DEMO</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="signup__overlay absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div className="container__child signup__form w-1/2 h-full text-[#e9e9e9]">
          <div>내용</div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalContents;
