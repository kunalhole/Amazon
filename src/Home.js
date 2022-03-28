import React from "react"
import "./Home.css"
import Product from "./Product"
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        className="home__image"
        alt="Amazon Banner"
      />

      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="1"
          title="Onion"
          price={5}
          rating={3}
          image="https://imgs.search.brave.com/7mCfbr4Uq2RTc2ofXtvhgWPbzcvgAJEKRGDYs0vwdQs/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/ZHRRQkVuTVQyTlRP/RTg2UXl3dktnSGFF/NyZwaWQ9QXBp"
        />

        <Product
          id="1"
          title="Tomato without Basket"
          price={15}
          rating={3}
          image="https://imgs.search.brave.com/FtQufKarsYE7UmaYOlgzdRWgoLVwWK_UicOv17YTufE/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/djVHbHVtQUp1bTNf/QU1kclBNUnd3SGFF/NyZwaWQ9QXBp"
        />
        {/* Product */}
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Petorl"
          price={150}
          rating={5}
          image="https://imgs.search.brave.com/7ARPwBMC51ecywRdwN54vRnxHSnVU-kZeaaloy4Y41g/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/VHhueWJvdllrOGN0/OC1QR1lJX2lBSGFF/SyZwaWQ9QXBp"
        />
        <Product
          id="1"
          title="Iphone 13 Pro Max"
          price={150}
          rating={5}
          image="https://imgs.search.brave.com/9Prz556sTiZdPuJCrJpi-kztwO6pu4gsLBdGbNa9rzQ/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9zdG9y/ZS5zdG9yZWltYWdl/cy5jZG4tYXBwbGUu/Y29tLzQ5ODIvYXMt/aW1hZ2VzLmFwcGxl/LmNvbS9pcy9pcGhv/bmUtMTMtcHJvLW1h/eC1ncmFwaGl0ZS1z/ZWxlY3Q_d2lkPTEy/MDAmaGVpPTYzMCZm/bXQ9anBlZyZxbHQ9/OTUmLnY9MTYzMTY1/Mjk1NjAwMA"
        />
        <Product
          id="1"
          title="Iphone 13 Pro Max"
          price={150}
          rating={5}
          image="https://imgs.search.brave.com/9Prz556sTiZdPuJCrJpi-kztwO6pu4gsLBdGbNa9rzQ/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9zdG9y/ZS5zdG9yZWltYWdl/cy5jZG4tYXBwbGUu/Y29tLzQ5ODIvYXMt/aW1hZ2VzLmFwcGxl/LmNvbS9pcy9pcGhv/bmUtMTMtcHJvLW1h/eC1ncmFwaGl0ZS1z/ZWxlY3Q_d2lkPTEy/MDAmaGVpPTYzMCZm/bXQ9anBlZyZxbHQ9/OTUmLnY9MTYzMTY1/Mjk1NjAwMA"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Iphone 13 Pro Max"
          price={150}
          rating={5}
          image="https://imgs.search.brave.com/9Prz556sTiZdPuJCrJpi-kztwO6pu4gsLBdGbNa9rzQ/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9zdG9y/ZS5zdG9yZWltYWdl/cy5jZG4tYXBwbGUu/Y29tLzQ5ODIvYXMt/aW1hZ2VzLmFwcGxl/LmNvbS9pcy9pcGhv/bmUtMTMtcHJvLW1h/eC1ncmFwaGl0ZS1z/ZWxlY3Q_d2lkPTEy/MDAmaGVpPTYzMCZm/bXQ9anBlZyZxbHQ9/OTUmLnY9MTYzMTY1/Mjk1NjAwMA"
        />
      </div>
    </div>
  )
}

export default Home
