import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props; 
  
    // Optimised the code instead of padding in the JSX added required data in the const
    const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines,costForTwo,  } = resData?.data;
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
        {/* OPTIMISATION taking the variable from the const declaration */}
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>₹{costForTwo / 100}</h4>
        <h4>{deliveryTime} Minutes</h4>
  
      </div>
    )
  }

  export default RestaurantCard;