import { LazyMotion, domAnimation, m } from "framer-motion";
import SectionTitle from "../components/Section/SectionTitle";
import ContactForm from "../components/Contact/ContactForm";
import SocialLink from "../components/Contact/SocialLink";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center "
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[80%] mt-20">
        <div className="w-full">
          <SectionTitle title="CONTACT" subTitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4 justify-center mt-5 items-center"
            >
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <SocialLink />
        <div className="bg-[#474E68] flex justify-center pb-4 text-grayscale-0">
          <span>
            Copyright © 2023. by <b>JUNG SeungHyun (Plla2)</b> All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
