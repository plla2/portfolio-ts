import { m } from "framer-motion";

const HeroScroll = () => {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex flex-col justify-center items-center"
    >
      <p className="pb-2 text-[12px] text-primary-400">SCROLL DOWN</p>
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary-400 flex justify-center items-start p-2">
        <m.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 rounded-full bg-primary-400"
        />
      </div>
    </div>
  );
};

export default HeroScroll;
