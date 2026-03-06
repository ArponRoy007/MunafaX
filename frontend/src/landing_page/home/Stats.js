import React from "react";

function Stats() {
  return (
    // Adjusted outer padding to be smaller on mobile, larger on desktop
    <div className="container p-5 p-md-5">
      {/* align-items-center keeps the text vertically balanced with the image */}
      <div className="row align-items-center">
        
        {/* Left Column - Text Content */}
        {/* col-12 for small screens, col-md-6 for half-screens and up */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="fs-2 mb-4 mb-md-5">Trust with confidence</h1>
          
          <div className="mb-4">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.3+ crore customers trust MunafaX with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Column - Image and Links */}
        {/* Added mt-4 mt-md-0 to give space between text and image when stacked */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center mt-4 mt-md-0">
          <img 
            src="/media/images/two.png" 
            alt="Ecosystem Graphic"
            className="img-fluid mb-4" /* img-fluid is crucial here! */
            style={{ maxWidth: "90%" }} 
          />
          
          {/* Flexbox wrapper for the links so they stack on mobile but sit side-by-side on desktop */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-5">
            <a href="#products" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              {/* Changed 'class' to 'className' */}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#demo" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Stats;