import { demoIcon, githubIcon } from "../../assets";
import { m } from "framer-motion";
import "./styles.css";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ModalContents from "./ModalContents";
import { PropsType } from "./Types";

const ProjectSingle = ({ item }: PropsType) => {
  ReactModal.setAppElement("#root");
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  return (
    <div className="flex flex-col">
      <ModalContents
        handleCloseModal={handleCloseModal}
        item={item}
        showModal={showModal}
      />
      <div className="card cursor-pointer" onClick={handleOpenModal}>
        <m.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src={item.image} alt="프로젝트 이미지" />
              </div>
            </div>
            <div className="front">
              <img src={item.image} alt="프로젝트 이미지" className="blur-sm" />
              <div className="front-content">
                <small className="badge">{item.name}</small>
                <div className="description">
                  <div className="title">
                    <div className="px-3 py-1 text-xs bg-primary-600 w-fit rounded-lg my-1">
                      {item.team}
                    </div>
                    <p className="title mb-3">{item.description}</p>
                    <div className="px-3 py-1 text-xs bg-primary-600 w-fit rounded-lg mt-2 mb-1">
                      Stack
                    </div>
                    <p className="title">{item.stack}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
      <m.div
        className="main flex flex-col gap-[0.5em] mt-6 w-fit h-fit ml-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="up flex flex-row gap-[0.5em]">
          {[
            { icon: githubIcon, url: item.github, alt: "깃허브 아이콘" },
            { icon: demoIcon, url: item.demo, alt: "링크 아이콘" },
          ].map((button, index) => (
            <m.button
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={`card${
                index + 1
              } w-14 h-14 outline-none border-0 bg-[#ECF9FF] `}
              onClick={() => window.open(button.url)}
            >
              <img
                src={button.icon}
                alt={button.alt}
                className="ml-[0.8em] w-8"
              />
            </m.button>
          ))}
        </div>
      </m.div>
    </div>
  );
};

export default ProjectSingle;
