import Marquee from "react-fast-marquee";

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  direction?: "left" | "right" | "up" | "down" | undefined;
}

const MarqueeCards = ({ children, direction }: props) => {
  return (
    <Marquee direction={direction} speed={80} pauseOnHover={true}>
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
