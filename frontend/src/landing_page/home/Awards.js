import React from 'react';

function Awards() {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        
        {/* Left Column - Image */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img 
            src="media/images/largestBroker.png" 
            alt="Largest Broker Trophy" 
            className="img-fluid" 
            style={{ maxWidth: "85%" }} 
          />
        </div>

        {/* Right Column - Text */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-0">
          <h2>Largest stock broker in India</h2> 
          <p className="mb-4 mt-3">
            2+ million MunafaX clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>
          
          <img 
            src="/media/images/press-logos.png" 
            alt="Press Logos" 
            className="img-fluid mt-3" 
            style={{ width: "90%" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;