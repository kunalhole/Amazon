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
          title="boAt Storm 1.3 CurvedDisplay Smartwatch"
          price={2499}
          rating={5}
          image="https://imgs.search.brave.com/QiWYzuQlbxBjqytg4SpMvALpQK2k8Cip9Rlm41vXqcI/rs:fit:1097:1200:1/g:ce/aHR0cHM6Ly9jZG4x/LnNtYXJ0cHJpeC5j/b20vcngtaXZTVU1q/ZkVsLXcxMjAwLWgx/MjAwL2JvYXQtc3Rv/cm0tc21hcnR3YXRj/LmpwZw"
        />

        <Product
          id="1"
          title="boAt Airdopes 443 True Wireless Earbuds Best Price in India"
          price={1500}
          rating={5}
          image="https://imgs.search.brave.com/2dH38VFJmwSgKvOrVzcYtsHNkYJJL5PiLNdYPaSD8So/rs:fit:1200:1065:1/g:ce/aHR0cHM6Ly9jZG4x/LnNtYXJ0cHJpeC5j/b20vcngtaUFRM1g3/bTBPLXcxMjAwLWgx/MjAwL2JvYXQtYWly/ZG9wZXMtNDQzLXRy/LmpwZw"
        />
        {/* Product */}
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Psychology Of Money Book"
          price={999}
          rating={4}
          image="https://imgs.search.brave.com/OHcvUJ8JcFTflhyArvpaDg6pGMv-wzsmTyzc4FkvqP8/rs:fit:768:512:1/g:ce/aHR0cHM6Ly9yb2tp/bmd6LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9U/aGUtUHN5Y2hvbG9n/eS1vZi1Nb25leS03/Njh4NTEyLmpwZw"
        />
        <Product
          id="1"
          title="boAt Rockerz 510 Wired And Wireless Headphone"
          price={1499}
          rating={5}
          image="https://imgs.search.brave.com/CMQmq_L7wLRmAyWU_72rJl9aBhLbcEVGhoVE4rX1D6E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Y29tcGFyZXByaXgu/aW4vaW1hZ2VzL3By/b2R1Y3QvbGFyZ2Uv/Ym9hdC1yb2NrZXJ6/LTUxMC13aXJlZC1h/bmQtd2lyZWxlc3Mt/aGVhZHBob25lLWxh/cmdlLmpwZWc"
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
          title="Sony 50 Inch LED Full HD Smart TV Black KDL 50W660F"
          price={15000}
          rating={4}
          image="https://imgs.search.brave.com/znibmoVXZ_RMG44JO2tpc7o-V8cYkwKzFmLCb9V72J0/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9tdWJh/cmFrdGVjaC5jby5r/ZS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9Tb255LTUw/LUluY2gtTEVELUZ1/bGwtSEQtU21hcnQt/VFYtQmxhY2stS0RM/LTUwVzY2MEYtYS5q/cGc"
        />
      </div>
    </div>
  )
}

export default Home
