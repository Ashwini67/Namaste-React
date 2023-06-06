import React from "react"
import ReactDOM from "react-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://cdn.vectorstock.com/i/preview-1x/54/55/restaurant-food-point-icon-map-pointer-symbol-vector-46625455.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
        </ul>

      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/3/20167003/90e28f0d956772b2f437dd550ca71eb8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
      <h3>Ashwini Food</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4 starts</h4>
      <h4>38 minutes</h4>

    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
       <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

    </div>
  )
}


ReactDOM.render(<AppLayout />, document.getElementById("root"));
