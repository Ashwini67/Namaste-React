import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {console.log("button clickd");}}>Top Rated Restraurant</button>
        </div>
        <div className="res-container">

          {/* BEST PRACTICE IS TO USE  */}
        
        {
          resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
        }
   
        </div>
      </div>
    )
  }


  export default Body;