export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  documentation: {
    introduction: string;
    steps: {
      title: string;
      description:string;
      imageUrl: string;
      imageHint: string;
    }[];
  };
}
