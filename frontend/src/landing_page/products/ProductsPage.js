import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/images/products-kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#demo"
        learnMore="#learn"
        googlePlay="#playstore"
        appStore="#appstore"
      />
      <RightSection
        imageURL="/media/images/products-console.png"
        productName="Console"
        productDescription="The central dashboard for your MunafaX account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#learn"
      />
      <LeftSection
        imageURL="/media/images/products-coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#demo"
        learnMore="#learn"
        googlePlay="#playstore"
        appStore="#appstore"
      />
      <RightSection
        imageURL="/media/images/landing2.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="#learn"
      />
      <LeftSection
        imageURL="/media/images/varsity-products.svg"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#demo"
        learnMore="#learn"
        googlePlay="#playstore"
        appStore="#appstore"
      />
      
      {/* Wrapped this text in a matching container to keep the spacing rhythm */}
      <div className="container border-top pt-5 pb-5 text-center">
        <p className="fs-5 m-0">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#blog" style={{ textDecoration: "none" }}>MunafaX.tech</a> blog.
        </p>
      </div>
      
      <Universe />
    </>
  );
}

export default ProductsPage;