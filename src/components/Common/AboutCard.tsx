import { LazyMotion, domAnimation, m } from "framer-motion";
import { cardContents } from "../../constant/Const";

const AboutCard = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col justify-center items-center mt-20">
        {cardContents.map((card) => {
          return (
            <m.div
              className="w-96 min-w-max h-full m-2 flex justify-start bg-[#FFF5E4] rounded-lg shadow-xl py-3 px-8 items-center hover:scale-110 opacity-90"
              key={card.id}
              initial={{ scale: 1, x: 200 }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1,
                type: "spring",
              }}
            >
              <img
                src={card.icon}
                alt="phone 아이콘"
                className="w-6 h-6 mr-7"
              />
              <div>
                <p className="text-lg opacity-80">{card.title}</p>
                <p className="opacity-60">{card.contents}</p>
                <m.a
                  href={card.links}
                  target="_blank"
                  className="text-[#f95b5b] opacity-80"
                >
                  {card.links}
                </m.a>
              </div>
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
};

export default AboutCard;
