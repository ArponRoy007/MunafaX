import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="/media/images/Arpon_Roy.jpg"
            alt="Arpon Roy"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Arpon Roy</h4>
          <h6>Full-Stack Developer, Creator</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Arpon architected and developed MunafaX to demonstrate his expertise
            in modern full-stack web development. With a deep passion for the
            MERN stack, he builds scalable applications that solve complex
            problems.
          </p>
          <p>
            He possesses strong fundamentals in Data Structures and algorithms
            in Java, alongside expertise in modern DevOps and containerization
            using AWS, Jenkins, Docker, and Kubernetes.
          </p>
          <p>Creating impactful software is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/arpon-roy-60784a301"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/ArponRoy007"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/royarpon007"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
