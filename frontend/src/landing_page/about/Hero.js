import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-3 p-md-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            We kick-started operations with the goal of breaking all barriers 
            that traders and investors face in India in terms of cost, support, 
            and technology. We named the platform MunafaX, a combination of "Munafa", 
            the word for profit, and "X" to represent exponential growth and next-generation execution.
          </p>
          <p>
            Today, our disruptive pricing models and full-stack in-house technology 
            are designed to provide a seamless, high-performance trading experience.
          </p>
          <p>
            Millions of simulated orders can be processed every day through our 
            powerful ecosystem of investment platforms, demonstrating highly scalable 
            architecture and real-time data handling.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#labs" style={{ textDecoration: "none" }}>
              MunafaX Labs
            </a>
            , our internal development initiative, continuously experiments with 
            cutting-edge tech stacks with the goal of innovating the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our GitHub repository or see what other developers 
            are saying about our architecture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;