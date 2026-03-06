import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 mb-5">
        <h1 className="fs-4 mb-5 text-muted fw-normal">To create a ticket, select a relevant topic</h1>
        
        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>Online Account Opening</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Offline Account Opening</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Company, Partnership and HUF</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>NRI Account Opening</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Charges at MunafaX</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>MunafaX IDFC FIRST Bank 3-in-1 Account</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Getting Started</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-user" aria-hidden="true"></i> Your MunafaX Account
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>Login credentials</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Your Profile</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Account modification and segment addition</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>CMR & DP ID</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Nomination</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Transfer and conversion of shares</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>Trading FAQs</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Kite</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Margins</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Product and order types</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Corporate actions</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Kite features</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-credit-card" aria-hidden="true"></i> Funds
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>Fund withdrawal</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Adding funds</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Adding bank accounts</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>eMandates</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-circle-o-notch" aria-hidden="true"></i> Console
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>IPO</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Portfolio</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Funds statement</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Profile</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Reports</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Referral program</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 p-3 mt-2 mb-2">
          <h4 className="fs-5 mb-4">
            <i className="fa fa-circle" aria-hidden="true"></i> Coin
          </h4>
          <ul className="list-unstyled" style={{ lineHeight: "2.5", fontSize: "14px" }}>
            <li><a href="#link" style={{ textDecoration: "none" }}>Understanding mutual funds</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Coin app</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Coin web</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>Transactions and reports</a></li>
            <li><a href="#link" style={{ textDecoration: "none" }}>National Pension Scheme (NPS)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;