import home from "../../content/pages/home.json";

type Home = {
  readonly hero: { heading: string; paragraph: string; text: string; path: string; };
  readonly subhero: { heading: string; paragraph: string; };
  readonly featuresgrid: { heading: string; paragraph: string; features: { heading: string; paragraph: string; }[]; };
};
export default home as Home;