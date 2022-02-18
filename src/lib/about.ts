import about from "../../content/pages/about.json";

type About = {
  readonly title: { heading: string; paragraph: string; };
  readonly split: { heading: string; paragraph: string; }[];
  readonly timeline: { heading: string; paragraph: string; steps: { heading: string; paragraph: string; }[]; };
};
export default about as About;