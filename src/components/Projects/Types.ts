export interface PropsType {
  item: {
    id: number;
    name: string;
    stack: string;
    description: string;
    image: string;
    team: string;
    github: string;
    demo: string;
    review: string;
    date: string;
    modalImg: string[];
    stackCause: string[];
    mywork: string[];
    troubleShootings: string[];
  };
}

export interface ContentTypes {
  item: {
    id: number;
    name: string;
    stack: string;
    description: string;
    image: string;
    team: string;
    github: string;
    demo: string;
    review: string;
    date: string;
    modalImg: string[];
    stackCause: string[];
    mywork: string[];
    troubleShootings: string[];
  };
  handleCloseModal(): void;
  showModal: boolean;
}
export interface ProjectCardsPropsType {
  projects: {
    id: number;
    name: string;
    stack: string;
    description: string;
    image: string;
    team: string;
    github: string;
    demo: string;
    review: string;
    date: string;
    modalImg: string[];
    stackCause: string[];
    mywork: string[];
    troubleShootings: string[];
  }[];
}
