import contact from "../../content/pages/contact.json";

type Contact = {
  readonly title: { heading: string; paragraph: string; };
};
export default contact as Contact;