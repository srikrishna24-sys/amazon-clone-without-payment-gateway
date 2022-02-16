import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home_row">
          <Product
            title="samsung phone"
            price={500}
            image="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            rating={3}
          />
          <Product
            title="belt"
            price={1500}
            image="https://media.istockphoto.com/photos/collection-of-leather-belts-on-a-wooden-table-picture-id1029383076?s=612x612"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="orange magna shoes"
            price={20000}
            image="https://media.istockphoto.com/photos/canvas-shoes-on-white-picture-id1284061545?s=612x612"
            rating={3}
          />
          <Product
            title=" loreal lipstick"
            price={750}
            image="https://m.media-amazon.com/images/I/71nyGLujUrL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Light saber"
            price={100000}
            image="https://m.media-amazon.com/images/I/51QMlThELTL._SL1500_.jpg"
            rating={6}
          />
        </div>
        <div className="home_row">
          <Product
            title="uchiha sasuke statue"
            price={60000}
            image="https://m.media-amazon.com/images/I/51qHomZ7mBL._SL1100_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
