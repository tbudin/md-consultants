import home from "../../content/pages/home.json";

type Home = {
  readonly hero: { heading: string; paragraph: string; text: string; path: string; image: string; partners; };
  readonly subhero: { heading: string; paragraph: string; image: string; };
  readonly featuresgrid: { heading: string; paragraph: string; features: { heading: string; paragraph: string; icon: string; }[]; };
  readonly split: { heading: string; paragraph: string; image: string; }[];
  readonly featureslist: { heading: string; paragraph: string; features: { heading: string; paragraph: string; }[]; };
  readonly faq: { heading: string; paragraph: string; questions: { question: string; answer: string; }[]; };
  readonly cta: { heading: string; text: string; path: string; };
};
export default home as Home;