import { LazyMotion, domAnimation, m } from "framer-motion";
import { projects } from "../../constant/Const";
import "./styles.css";
import { githubIcon, linkIcon, reviewIcon } from "../../assets";

const ProjectCards = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex gap-14 justify-center">
        {projects.map((item) => {
          return (
            <div key={item.id} className="card">
              <m.div
                className="card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <img src={item.image} alt="프로젝트 이미지" />
                    </div>
                  </div>
                  <div className="front">
                    <img
                      src={item.image}
                      alt="프로젝트 이미지"
                      className="blur-sm"
                    />
                    <div className="front-content">
                      <small className="badge">{item.name}</small>
                      <div className="description">
                        <div className="title">
                          <p className="title">{item.description}</p>
                          <div className="px-3 py-1 text-xs bg-primary-600 w-fit rounded-lg my-4">
                            Stack
                          </div>
                          <p className="title">{item.stack}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
              <m.div
                className="main flex flex-col gap-[0.5em] mt-6 w-fit h-fit ml-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="up flex flex-row gap-[0.5em]">
                  <m.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#E5FBB8" }}
                    className="card1 w-14 h-14 outline-none border-0 bg-[#ECF9FF] "
                    onClick={() => window.open(item.github)}
                  >
                    <img
                      src={githubIcon}
                      alt="깃허브 아이콘"
                      className="mt-[1em] ml-[1.1em] w-8"
                    />
                  </m.button>
                  <m.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#E5FBB8" }}
                    className="card2 w-14 h-14 outline-none border-0 bg-[#ECF9FF]"
                    onClick={() => window.open(item.review)}
                  >
                    <img
                      src={reviewIcon}
                      alt="회고링크 아이콘"
                      className="mt-[1em] ml-[0.5em] w-8"
                    />
                  </m.button>
                </div>
                <div className="down flex flex-row gap-[0.5em]">
                  <m.button
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#E5FBB8" }}
                    className="card3 w-[120px] h-14 outline-none border-0 bg-[#ECF9FF]"
                    onClick={() => window.open(item.demo)}
                  >
                    <img
                      src={linkIcon}
                      alt="배포링크 아이콘"
                      className="ml-[2.7em] w-10"
                    />
                  </m.button>
                </div>
              </m.div>
            </div>
          );
        })}
      </div>
    </LazyMotion>
  );
};

export default ProjectCards;
