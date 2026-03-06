import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">The MunafaX Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/zerodhaFundhouse.png" className="img-fluid" style={{ width: "180px" }} alt="Fundhouse" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/sensibull-logo.svg" className="img-fluid" style={{ width: "180px" }} alt="Sensibull" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Options trading platform that lets you create strategies, analyze positions, and examine data points.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/tijori.svg" className="img-fluid" style={{ width: "130px" }} alt="Tijori" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/streak-logo.png" className="img-fluid" style={{ width: "130px" }} alt="Streak" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/smallcase-logo.png" className="img-fluid" style={{ width: "150px" }} alt="Smallcase" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3 mt-4">
          <img src="/media/images/ditto-logo.png" className="img-fluid" style={{ width: "100px" }} alt="Ditto" />
          <p className="text-small text-muted mt-3" style={{ fontSize: "14px", padding: "0 20px" }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

        <button
          className="btn btn-primary fs-5 mt-5 mb-5 px-5 py-2 mx-auto"
          style={{ width: "fit-content" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;