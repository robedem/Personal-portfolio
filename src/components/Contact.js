import React, { useEffect } from "react";
// import styles from "./Contact.module.css";

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
            <a href="mailto:hi@cassie.codes">Pop me an email</a> at
            hi@roberto.dev <br />
            Or reach me directly via{" "}
            <a href="mailto:youremail@outlook.com">Outlook</a> <br />
            Or give me a shout on social media.
          </p>

          <div className={"socialIcons"}>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:youremail@outlook.com">
              <i className="fa-brands fa-microsoft"></i>
            </a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className={"contactAnimation"}>
          <dotlottie-wc
            src="https://lottie.host/765d758a-2bef-4164-8ba5-ebea5987774e/szokhWScui.lottie"
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
