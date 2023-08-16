import {
  blogIcon,
  githubIcon,
  lofi,
  mailIcon,
  moviepop,
  phoneIcon,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "projects",
    title: "PROJECTS",
  },
  {
    id: "skills",
    title: "SKILLS",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const introduction = {
  text: [
    "안녕하세요. 프론트엔드 개발자를 꿈꾸며 공부하는 정승현입니다.",
    '" 매일삽질(昧日颯窒) - 이른 아침의 태양을 보고 새벽녘의 바람소리를 듣는 성실함. "',
    "매일삽질이라는 사자성어가 그냥 재미있게만 보일 수 있지만, 그 뜻이 저에게 너무 어울리는 사자성어입니다. 실력은 성실함에 비례한다고 생각하는 저는 꾸준히 공부하고, 지식을 쌓는 걸 즐기고 두려워하지 않습니다.",
    "남녀노소 가리지 않고 사용자 입장에서 쉽고, 간단해보이지만 강력한 기능을 추구하여 더 나은 사용자 경험을 고민하며 개발을 합니다.",
    "신입으로서 항상 배우는 자세를 가지고 문제에서 기회를 잡고, 해결을 통한 성취감을 얻으며 경력을 쌓을 준비가 되었습니다!",
  ],
};

// const profileImg = {
//   image: [avatar],
// };

const cardContents = [
  {
    id: 0,
    icon: phoneIcon,
    title: "PHONE",
    contents: "010-4426-1317",
  },
  {
    id: 1,
    icon: mailIcon,
    title: "MAIL",
    contents: "jhbljs97@gmail.com",
  },
  {
    id: 2,
    icon: githubIcon,
    title: "GITHUB",
    links: "https://github.com/plla2",
  },
  {
    id: 3,
    icon: blogIcon,
    title: "BLOG",
    links: "https://jhbljs92.tistory.com",
  },
];

const projects = [
  {
    id: 0,
    name: "MoviePoP",
    stack:
      "React.js, TypeScript, React-query, Redux-Toolkit, Styled-components",
    description:
      "FE3인, BE3인 총6인으로 구성된 팀에서 디자인/기획부터 배포까지의 사이클을 성공적으로 끝마친 영화 리뷰작성 및 맞춤추천 + 리뷰영화를 함께 볼 팟모집 서비스",
    image: moviepop,
    github: "https://github.com/codestates-seb/seb44_main_008",
    demo: "http://moviepop.online/",
    review:
      "https://jhbljs92.tistory.com/entry/%EB%AC%B4%EB%B9%84%ED%8C%9D-%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
  },
  {
    id: 1,
    name: "Lofi",
    stack: "React.js, TypeScript, Redux-Toolkit, Sass, Mui, Bootstrap",
    description:
      "낮밤 + 비소리 토글모드, lofi음악청취 + 집중모드 + 투두리스트 서비스 ",
    image: lofi,
    github: "https://github.com/plla2/lofi-ts",
    demo: "https://lofi-ts.netlify.app/",
    review:
      "https://jhbljs92.tistory.com/entry/lofi-%EC%9B%B9%EC%95%B1-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-%ED%9A%8C%EA%B3%A0",
  },
  {
    id: 2,
    name: "Portfolio",
    stack: "React.js, TypeScript, Framer-motion, Tailwindcss",
    description: "framer-motion을 이용한 다양한 애니메이션을 가진 포트폴리오",
    image: portfolio,
    github: "https://github.com/plla2/portfolio-ts",
    demo: "https://plla2.netlify.app/",
  },
];
export { introduction, cardContents, projects };
