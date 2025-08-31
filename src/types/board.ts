export interface BoardStep {
  quote: string;
  image: string;
  imageAlt: string;
}

export interface BoardData {
  steps: BoardStep[];
  layout: 'quote-first' | 'image-first' | 'single';
  customStyles?: {
    quoteContainer?: string;
    imageContainer?: string;
  };
}
