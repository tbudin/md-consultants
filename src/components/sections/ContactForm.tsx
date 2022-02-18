type Props = {
  heading: string;
  paragraph: string;
};
export default function ContactForm({ heading, paragraph }: Props) {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="site-row items-start">
          <div className="row-content">
            <h2>{ heading }</h2>
            <p>{ paragraph }</p>
          </div>
          <div className="row-illustration">
            <form
              name="contact"
              method="POST"
              action="/contact/success"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <div className="hidden">
                <label>
                  Should you fill this one? <input name="bot-field" />
                </label>
              </div>
              <div>
                <label>
                  Name: <input type="text" name="name" />
                </label>
              </div>
              <div>
                <label>
                  Email: <input type="text" name="email" />
                </label>
              </div>
              <div>
                <label>
                  Message: <textarea name="message"></textarea>
                </label>
              </div>
              <div>
                <button className="btn" type="submit">
                  <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg">
                    <rect className="btn-shape" />
                  </svg>
                  <div className="btn-text">Submit</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}