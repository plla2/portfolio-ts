import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../constant/Const";

const SocialLink = () => {
  return (
    <div className="w-full h-[100px] bg-[#474E68] flex justify-center items-center gap-10 p-6">
      {[
        { link: "https://github.com/plla2", icon: icons.faGithub },
        { link: "https://jhbljs92.tistory.com/", icon: icons.faSquarePen },
      ].map((social, index) => (
        <a href={social.link} target="_blank" key={index}>
          <FontAwesomeIcon
            icon={social.icon}
            className="text-3xl text-grayscale-0 hover:scale-110  transition-all duration-75"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLink;
