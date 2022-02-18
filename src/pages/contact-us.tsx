import Layout from "../components/layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  const url = "/contact-us";
  const title = "Contact us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <section className="site-section">
        <div className="site-container">
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container">
          <div className="site-row items-start">
            <div className="row-content">
              <h2>Section heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi omnis voluptate itaque, est aperiam alias dolorem laboriosam. Quos odit rem molestias et inventore dolorum repudiandae, vel rerum. Dolores, perspiciatis.</p>
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
      <style jsx>{`
        form {
          max-width: 320px;
          margin: 2rem auto;
        }
        input,
        textarea {
          display: block;
          width: 100%;
          margin: 0.5rem auto 1.5rem;
          outline: none;
          border: 1px solid var(--text-color);
          border-radius: 0;
          padding: 0.5em 0.5em;
        }
        input:focus,
        textarea:focus {
          border: 1px solid var(--accent-color);
        }
      `}</style>
    </Layout>
  );
}