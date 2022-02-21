import contact from "../../content/pages/contact.json";

type Contact = {
  readonly cta: { heading: string; text: string; path: string; type: string; };
  readonly title: { heading: string; paragraph: string; };
};
export default contact as Contact;