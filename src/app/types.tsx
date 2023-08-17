export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  gender: string;
  species: string;
  type: string;
  image: string;
  created: string;
  url: string;
  episode: {
    name: string;
  };
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  }
}