// import { useEffect, useRef, useState } from "react";
// import { ImageSlideType } from "./CommonType";
// import { LazyMotion, domAnimation, m } from "framer-motion";

// const ImageSlide = ({ images }: ImageSlideType) => {
//   const [index, setIndex] = useState(0);
//   const [isInViewport, setIsInViewport] = useState(false);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isInViewport) {
//         setIndex((i) => (i + 1) % images.length);
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images, isInViewport]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsInViewport(entry.isIntersecting),
//       { threshold: 0 }
//     );
//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);
//   console.log(images[0]);
//   return (
//     <LazyMotion features={domAnimation} strict>
//       <m.div
//         ref={imageRef}
//         initial={{ x: 200, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1,
//           type: "spring",
//           stiffness: 100,
//           damping: 20,
//         }}
//         className="w-full h-full blob drop-shadow-div"
//         style={{
//           backgroundImage: `url(${images[index]})`,
//         }}
//       ></m.div>
//     </LazyMotion>
//   );
// };

// export default ImageSlide;
