import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../constant/Const";

const SocialLink = () => {
  return (
    <div className="w-full h-[100px] bg-[#474E68] flex justify-center items-center gap-10 p-6">
      <a href="https://github.com/plla2" target="_blank">
        <FontAwesomeIcon
          icon={icons.faGithub}
          className="text-3xl text-grayscale-0 hover:scale-110  transition-all duration-75"
        />
      </a>
      <a href="https://jhbljs92.tistory.com/" target="_blank">
        <FontAwesomeIcon
          icon={icons.faSquarePen}
          className="text-3xl text-grayscale-0 hover:scale-110  transition-all duration-75"
        />
      </a>
    </div>
  );
};

export default SocialLink;
