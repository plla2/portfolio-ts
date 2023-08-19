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
  };
  handleCloseModal(): void;
  showModal: boolean;
}
