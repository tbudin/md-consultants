import Layout from "../components/layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  const url = "/about-us";
  const title = "About us";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <h1>About Us</h1>
      <section className="site-section">
        <div className="site-container">
          <div className="site-row items-start">
            <div className="row-content">
              <h2>Section heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi omnis voluptate itaque, est aperiam alias dolorem laboriosam. Quos odit rem molestias et inventore dolorum repudiandae, vel rerum. Dolores, perspiciatis.</p>
            </div>
            <div className="row-illustration">
              <div className="image-wrap">
                <img
                  src="/images/financial-institutions.jpg"
                  alt="Financial institution building over a blue sky"
                  className="imageCover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="site-section">
        <div className="site-container">
          <div className="heading-center">
            <h2>Section heading</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro in facere ratione, libero aliquam ad fugiat doloremque eum quos, distinctio illo veritatis esse possimus sunt accusamus id maiores nobis.</p>
          </div>
          <div className="timeline">
            <div className="ni">
              <div className="ns">
                <div className="no">
                  <h3 className="nu text-md mt-0">Date 1</h3>
                  <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, dolorum culpa nemo atque tempora perferendis ut dolores mollitia rerum voluptatem, iste expedita omnis natus voluptate distinctio vitae, maiores quisquam.</div>
                </div>
              </div>
              <div className="ns">
                <div className="no">
                  <h3 className="nu text-md mt-0">Date 2</h3>
                  <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit ad impedit perspiciatis, quae quas ipsam id repellat. Fugiat tempore dicta, voluptate aspernatur expedita hic sequi sint quod ea quo!</div>
                </div>
              </div>
              <div className="ns">
                <div className="no">
                  <h3 className="nu text-md mt-0">Date 3</h3>
                  <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo, dolorum culpa nemo atque tempora perferendis ut dolores mollitia rerum voluptatem, iste expedita omnis natus voluptate distinctio vitae, maiores quisquam.</div>
                </div>
              </div>
              <div className="ns">
                <div className="no">
                  <h3 className="nu text-md mt-0">Date 4</h3>
                  <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit ad impedit perspiciatis, quae quas ipsam id repellat. Fugiat tempore dicta, voluptate aspernatur expedita hic sequi sint quod ea quo!</div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      <style jsx>{`
        .ns {
          position: relative;
          padding-top: 24px;
          padding-bottom: 24px;
        }
        .ns:not(:last-of-type)::before {
          content: '';
          display: block;
          position: absolute;
          top: 44px;
          left: 4px;
          width: 2px;
          height: calc(100% - 10px - 8px);
          background: var(--text-color-lighter);
        }
        .no {
          margin-left: 34px;
        }
        .nu {
          position: relative;
        }
        .nu::before {
          content: '';
          display: block;
          position: absolute;
          top: 6px;
          left: -34px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-color-light);
        }
        @media (min-width: 769px) {
          .ns {
            padding-top: 32px;
            padding-bottom: 32px;
            width: 50%;
          }
          .ns:nth-child(odd) {
            left: 50%;
          }
          .ns:nth-child(even) {
            text-align: right;
          }
          .ns:not(:last-of-type)::before {
            top: 52px;
            left: -1px;
          }
          .ns:nth-child(even):not(:last-of-type)::before {
            left: auto;
            right: -1px;
          }
          .ns:nth-child(even) .no {
            margin-left: 0;
            margin-right: 34px;
          }
          .ns:nth-child(odd) .nu::before {
            left: -39px;
          }
          .ns:nth-child(even) .nu::before {
            left: auto;
            right: -39px;
          }
        }
      `}</style>
    </Layout>
  );
}