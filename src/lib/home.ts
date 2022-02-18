import home from "../../content/pages/home.json";

type Home = {
  readonly hero: { heading: string; paragraph: string; text: string; path: string; };
  readonly subhero: { heading: string; paragraph: string; };
  readonly featuresgrid: { heading: string; paragraph: string; features: { heading: string; paragraph: string; }[]; };
  readonly split: { heading: string; paragraph: string; }[];
  readonly featureslist: { heading: string; paragraph: string; features: { heading: string; paragraph: string; }[]; };
  readonly faq: { heading: string; paragraph: string; questions: { question: string; answer: string; }[]; };
  readonly cta: { heading: string; text: string; path: string; };
};
export default home as Home;