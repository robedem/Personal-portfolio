import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={"contactWrapper"}>
      <div className={"contactSection"}>
        <div className={"contactText"}>
          <h1>Hey there!</h1>
          <h2>I’m always up for a chat.</h2>
          <p>
            <a href="mailto:hi@roberto.dev">Pop me an email</a> at
            hi@roberto.dev <br />
            Or reach me directly via{" "}
            <a href="mailto:roberto.edem.dev@outlook.com">Outlook</a> <br />
            Or give me a shout on social media.
          </p>

          <div className={"socialIcons"}>
            <a href="https://twitter.com/robedem" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/robedem" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:roberto.edem.dev@outlook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-microsoft"></i>
            </a>
            <a href="https://github.com/robedem" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className={"contactAnimation"}>
          <dotlottie-wc
            src="/contact-animation.json" /* Updated to local file */
            style={{ width: "600px", height: "500px" }}
            speed="1"
            autoplay
            loop
          ></dotlottie-wc>
        </div>
      </div>
    </section>
  );
};

export default Contact;