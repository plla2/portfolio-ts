import { useEffect } from "react";
import "./styles.css";

interface Props {
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader = ({ setShowLoader }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3500);
  }, [setShowLoader]);
  return (
    <div className="bg-grayscale-950 h-screen flex items-center justify-center overflow-hidden m-0">
      <div className="loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loader;
