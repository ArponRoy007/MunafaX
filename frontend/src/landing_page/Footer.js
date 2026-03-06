import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <img src="/media/images/logo3.png" style={{ width: "140px" }} alt="Logo" className="mb-3" />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, MunafaX Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
            <p className="fs-5 mb-3">Company</p>
            <div className="d-flex flex-column gap-2">
              <a href="#about" className="text-muted text-decoration-none">About</a>
              <a href="#products" className="text-muted text-decoration-none">Products</a>
              <a href="#pricing" className="text-muted text-decoration-none">Pricing</a>
              <a href="#referral" className="text-muted text-decoration-none">Referral programme</a>
              <a href="#careers" className="text-muted text-decoration-none">Careers</a>
              <a href="#tech" className="text-muted text-decoration-none">MunafaX.tech</a>
              <a href="#press" className="text-muted text-decoration-none">Press & media</a>
              <a href="#csr" className="text-muted text-decoration-none">MunafaX cares (CSR)</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
            <p className="fs-5 mb-3">Support</p>
            <div className="d-flex flex-column gap-2">
              <a href="#contact" className="text-muted text-decoration-none">Contact</a>
              <a href="#support" className="text-muted text-decoration-none">Support portal</a>
              <a href="#blog" className="text-muted text-decoration-none">MunafaX blog</a>
              <a href="#charges" className="text-muted text-decoration-none">List of charges</a>
              <a href="#downloads" className="text-muted text-decoration-none">Downloads & resources</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0">
            <p className="fs-5 mb-3">Account</p>
            <div className="d-flex flex-column gap-2">
              <a href="#account" className="text-muted text-decoration-none">Open an account</a>
              <a href="#transfer" className="text-muted text-decoration-none">Fund transfer</a>
              <a href="#challenge" className="text-muted text-decoration-none">60 day challenge</a>
            </div>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px", lineHeight: "1.6" }}>
          <p>
            MunafaX Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through MunafaX Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through MunafaX Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: MunafaX Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@munafax.com, for DP related to dp@munafax.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Welcome to MunafaX. Please note that this platform is not a real financial 
            institution, brokerage, or trading entity. It is a comprehensive, full-stack 
            web application clone of Zerodha, engineered entirely for educational and 
            portfolio purposes. The primary goal of this project is to showcase advanced 
            skills in modern full-stack development, including front-end UI/UX replication, 
            responsive design, robust back-end architecture, and seamless data handling. 
            Do not enter any real personal, financial, or sensitive information on this 
            website, as no actual trading, investing, or monetary transactions take place 
            here. This application is a strictly non-commercial, personal project developed 
            by Arpon Roy. It serves as a technical demonstration of translating complex 
            business logic and high-performance design into a fully functional web 
            ecosystem. If you are a recruiter, fellow developer, or tech enthusiast 
            exploring this platform, feel free to test the features, inspect the UI 
            components, and review the underlying codebase. For any inquiries regarding 
            the development process, the tech stack used, or potential software engineering 
            opportunities, please reach out directly through the provided contact links."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;