import {
  blogIcon,
  css,
  figma,
  git,
  githubIcon,
  html,
  js,
  lofi,
  mailIcon,
  moviepop,
  phoneIcon,
  portfolio,
  postman,
  react,
  redux,
  sass,
  styled,
  tailwind,
  ts,
  sendIcon,
  moviepop1,
  moviepop2,
  moviepop3,
  lofi1,
  lofi2,
  lofi3,
  port1,
  port2,
  port3,
} from "../assets";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";

const icons = {
  faGithub,
  sendIcon,
  faSquarePen,
};

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
    stackCause: [
      "TypeScript - 컴파일 언어인 TypeScript를 사용함으로써 컴파일 과정에서 오류를 잡아내기 때문에 오류를 비교적 쉽게 잡아내기 위해 사용",
      "React-query - 데이터 패칭 로직 단순화, 캐싱, 동기적 실행, 서버의 상태의 업데이트를 좀 더 용이하게 사용하기 위해 사용",
    ],
    mywork: [
      "프로젝트 초기세팅",
      "Input 컴포넌트 제작",
      "마이페이지 (각 탭별 CRUD)",
      "페이지네이션",
      "404, 500 에러페이지",
      "토스트 기능",
      "로그인/로그아웃 토큰관리",
      "회원정보 수정",
      "비밀변호 변경",
      "회원 탈퇴",
      "푸터",
    ],
    troubleShootings: [
      "공통된 컴포넌트(Input, Button, Modal 등)를 사용할 때 알 수 없는 프롭이 DOM으로 전달되어서 생긴 경고를 해결하기 위해 @emotion과 함께 사용되는 유틸리티 라이브러리 중 하나인 @emotion/is-prop-valid를 사용하여 알 수 없는 프롭을 필터링하여 경고를 피할 수 있었다.",
      "마이페이지에서 내 게시글을 삭제하면 곧바로 반영되어야 하는데, 새로고침을 눌러야만 삭제가 반영되는 이슈가 있었다. react-query를 사용하여 update요청 후에 get요청을 간단하게 재실행시킬 수 있었다. mutation함수가 성공할 때 invalidateQueries에 unique key로 맵핑된 get요청 함수를 넣어주어 해결할 수 있었다.",
      "클릭시 해당 게시글로 이동하는 div태그를 부모태그로 가진 button태그가 있는데 해당 button태그를 누르면 부모태그인 div태그까지 클릭이 반응되는 이슈가 있었다. 이벤트 버블링을 통해 부모 태그들까지 클릭 이벤트를 인식하고 반응하게 되는 것이였다. 이벤트 버블링을 막기위해 event.stopPropagation()을 통해 이벤트리스너가 가리키고 있는 요소만 이벤트를 감지하게하여 해결할 수 있었다.",
    ],
    description:
      "FE3인, BE3인 총6인으로 구성된 팀에서 디자인/기획부터 배포까지의 사이클을 성공적으로 끝마친 영화 리뷰작성 및 맞춤추천 + 리뷰영화를 함께 볼 팟모집 서비스",
    image: moviepop,
    team: "Team-Project",
    github: "https://github.com/plla2/Movie-PoP",
    demo: "http://moviepop.online/",
    review:
      "https://jhbljs92.tistory.com/entry/%EB%AC%B4%EB%B9%84%ED%8C%9D-%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
    date: "2023-06-28 ~ 2023-07-24",
    modalImg: [moviepop1, moviepop2, moviepop3],
  },
  {
    id: 1,
    name: "Lofi",
    stack: "React.js, TypeScript, Redux-Toolkit, Sass, Mui, Bootstrap",
    description:
      "낮밤 + 비소리 토글모드, lofi음악청취 + 집중모드 타이머 + 투두리스트 서비스웹앱",
    image: lofi,
    team: "Solo-Project",
    github: "https://github.com/plla2/lofi-ts",
    demo: "https://lofi-ts.netlify.app/",
    review:
      "https://jhbljs92.tistory.com/entry/lofi-%EC%9B%B9%EC%95%B1-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-%ED%9A%8C%EA%B3%A0",
    date: "2023-07-27 ~ 2023-08-09",
    modalImg: [lofi1, lofi2, lofi3],
    stackCause: [
      "MUI - 웹 디자이너 없이 이쁘고 화려한 UI들을 만들 수 있고, 확장성있게 위젯화를 편리하게 하기위해 사용",
      "Sass - Sass를 사용하여 셀렉터, 속성을 중첩시키거나 상위요소를 참조하고, 보다 간편한 방법으로 변수 선언 및 사용하여 효율적으로 개발하기 위해 사용",
    ],
    mywork: [
      "다크모드",
      "비소리 토글 구현",
      "lofi music audio",
      "lofi mode 변경",
      "noise background 음악",
      "음악 볼륨컨트롤",
      "집중모드 타이머",
      "투두리스트",
      "전체화면 기능",
    ],
    troubleShootings: [
      "Invalid type 'false' | 'active' of template literal expression 해당 에러는 표현식의 결과가 유효하지 않아서 발생한 에러였다. 삼항연산자로 moodOpen이 true일때만 active를 반환하고, false일때는 빈문자열을 반환하도록 처리해주었다.",
      "~코드에서 이 호출과 일치하는 오버로드가 없습니다. 해당 에러가 발생하는 주요 이유는 호출하는 인자의 타입이 일치하는 오버로드 시그니처가 없을 때, 인자 개수가 일치하는 오버로드 시그니처가 없을 때가 있는데 첫번째의 경우는 타입이 함수에 맞는 오버로드 시그니처가 없기 때문에 에러가 발생한다. 따라서 올바른 오버로드 시그니처를 추가하거나, 타입 체크를 수정하는 것으로 해결이 가능하다. 두번째의 경우는 함수 호출 부분에서 오버로드된 함수를 호출할 때 모호성이 생기기 때문에 타입에러가 발생하여 호출 시에 매개변수를 명시적으로 구분하여 오버로드를 선택하도록 하는것으로 해결이 가능하다.",
    ],
  },
  {
    id: 2,
    name: "Portfolio",
    stack: "React.js, TypeScript, Tailwindcss, Framer-motion",
    description:
      "React, Typescript, framer-motion을 이용한 다양한 애니메이션을 가지고있고, 반응형으로 디자인한 포트폴리오",
    image: portfolio,
    team: "Solo-Project",
    github: "https://github.com/plla2/portfolio-ts",
    demo: "https://plla2.netlify.app/",
    review:
      "https://jhbljs92.tistory.com/entry/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%A0%9C%EC%9E%91-%ED%9A%8C%EA%B3%A0",
    date: "2023-08-10 ~ ",
    modalImg: [port1, port2, port3],
    stackCause: [
      "Tailwindcss - 깊이가 하나인 클래스를 사용하고, 클래스 이름을 고민하지 않고, 스타일에 집중하기 위해 사용",
      "Framer-motion - 더 적은 코드를 작성하는 간단한 선언적 구문을 통해 애니메이션 코드베이스를 읽고 유지 관리를 쉽게 하기위해 사용",
    ],
    mywork: [
      "navbar의 react-scroll",
      "Section Title 애니메이션 효과",
      "Projects hover시 애니메이션 효과",
      "Project click시 모달 상세페이지",
      "Project 각각 github, demo link",
      "Skills react-fast-marquee를 통해 애니메이션 효과",
      "Skills hover시 애니메이션 효과 정지",
      "Contact emailjs를 통해 실제 메일 발송",
      "푸터 깃허브, 블로그 링크",
    ],
    troubleShootings: [
      "처음 navbar의 버튼들을 이용하여 스크롤을 제어하려고 할 때 scroll 이벤트를 이용하여 해당 값을 가져와서 사용하려고 하였으나 그렇게 했을 때 콘솔을 찍어보면 수많은 로그가 발생한다. 이유는 React의 특성상 변화가 있을 때 DOM을 다시 탐색하고 변화가 있는 부분을 Render하여 리플로우, 리페인팅 되기 때문에 성능에 문제가 발생하였다. 따라서 성능 개선을 위해 react-scroll 라이브러리를 사용하여 간단하게 스크롤 이벤트를 줄 수 있었고, scroll 할 때마다 값을 받아올 필요도 없어졌다.",
      "해당 포트폴리오 프로젝트 배포 후 다른 환경으로 접속을 해보았을 때 폰트와 이미지들이 생각보다 좀 더 늦게 적용되고 있는 부분이 눈에 보였다. 따라서 폰트들은 woff2라는 확장자를 사용하여 woff보다 30% 더 좋은 압축률로 폰트 중 가장 용량이 작은 것으로 수정을 하였다. 이미지들은 loading='lazy' 속성을 사용해 직접적으로 보이지 않는 것은 우선순위에서 미뤄두기 때문에 웹사이트의 성능을 향상시킬 수 있었다. 또한 decoding='async'을 사용하여 LCP가 아닌 이미지에 대해 디코딩을 먼저 할 필요가 없도록 지정하여 페이지 로드 속도를 높였다.",
      "An element doesn't have an autocomplete attribute 해당 이슈는 양식의 필드에는 id나 name 속성이 있지만, autocomplete 속성이 지정되지 않았을 때 브라우저는 사용자의 이전 입력을 기반으로 자동완성을 제공하지 않을 수 있고, 이로 인해 사용자 경험이 저하될 수 있다. 따라서 자동완성을 올바르게 활성화하려면 양식 필드마다 적절한 autocomplete 속성 값을 지정하기 위해 ContactForm의 input필드에 autoComplete속성을 추가하여 사용자 경험을 증대시켰다.",
    ],
  },
];

const skills = [
  {
    id: 13,
    title: "HTML",
    icon: html,
    desc: "저는 HTML을 사용하여 웹접근성, 표준성을 준수하여 모든 사용자가 액세스할 수 있는 의미 있는 컨텐츠를 시멘틱 태그를 이용해 마크업 할 수 있습니다.",
  },
  {
    id: 14,
    title: "CSS",
    icon: css,
    desc: "저는 css를 사용하여 웹 페이지를 디자인하고, display, position 등을 통해 사용자 경험을 향상시킨 레이아웃을 만들 수 있습니다.",
  },
  {
    id: 15,
    title: "JavaScript",
    icon: js,
    desc: "저는 JavaScript의 ES6, Array, Method, DOM 등을 사용하여 웹 페이지에 상호작용 및 기능을 도입하여 동적 사용자 인터페이스를 만들 수 있습니다. ",
  },
  {
    id: 16,
    title: "TypeScript",
    icon: ts,
    desc: "저는 TypeScript를 사용하여 코드에 목적을 명시하여 사전에 버그를 제거하고, 자동완성 및 실행 전 피드백을 통해 작업과 동시에 디버깅을 하여 생산성을 높일 수 있습니다.",
  },
  {
    id: 17,
    title: "React",
    icon: react,
    desc: "저는 React를 사용하여 재사용 가능한 컴포넌트를 설계하여 만들고, hook과 context를 사용하여 상태를 관리하고, 성능을 최적화 시킬 수 있습니다.",
  },
  {
    id: 18,
    title: "Redux-Toolkit",
    icon: redux,
    desc: "저는 Redux-Toolkit을 사용하여 Redux의 불편함을 해결하여 상태관리를 더 간단하고, 효율적으로 할 수 있고, 유지보수를 쉽게 만들 수 있습니다.",
  },
  {
    id: 19,
    title: "Styled-components",
    icon: styled,
    desc: "저는 Styled-components를 사용하여 CSS 모델을 컴포넌트 레벨로 추상화하고, props를 활용하여 조건부 스타일링을 할 수 있습니다.",
  },
  {
    id: 20,
    title: "Sass",
    icon: sass,
    desc: "저는 Sass를 사용하여 셀렉터, 속성을 중첩시키거나 상위요소를 참조하고, 보다 간편한 방법으로 변수 선언 및 사용하여 효율적으로 개발할 수 있습니다.",
  },
  {
    id: 21,
    title: "Tailwindcss",
    icon: tailwind,
    desc: "저는 TailwindCss를 사용하여 보다 편하게 반응형 레이아웃을 만들 수 있고, 커스터마이징을 통해 유연하게 스타일링을 할 수 있습니다.",
  },
  {
    id: 22,
    title: "Git",
    icon: git,
    desc: "저는 Git을 사용하여 원활한 프로젝트 협업, 코드 공유 및 이슈 추적을 하고, 여러가지 명령어들을 통해 버전관리를 할 수 있습니다.",
  },
  {
    id: 23,
    title: "Postman",
    icon: postman,
    desc: "저는 Postman을 사용하여 클라이언트 개발을 배제하고 RESTAPI를 테스팅할 수 있고, 문서화 또는 팀원 간 공유를 할 수 있습니다.",
  },
  {
    id: 24,
    title: "Figma",
    icon: figma,
    desc: "저는 Figma를 사용하여 디자이너 및 팀원들과 협업하여 더욱 빠르고 효율적으로 수행하고, 매력적인 사용자 인터페이스를 디자인할 수 있습니다.",
  },
];
export { introduction, cardContents, projects, skills, icons };
