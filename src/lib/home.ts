import home from "../../content/pages/home.json";

type Home = {
  hero: { heading: string; paragraph: string; text: string; path: string; }, 
  subhero: { heading: string; paragraph: string; }, 
  featuresgrid: { heading: string; paragraph: string; features: { heading: string; paragraph: string; }[]; }
};
export default home as Home;