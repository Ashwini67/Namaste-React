import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
  // Taking from mockData File
 const [listOfRestaurants,setListOfRestaurants] = useState(resList);


  // State Variable
  // const [listOfRestaurants, setListOfRestaurants] = useState([
  //   {
  //     "data": {
  //       "id": "209207",
  //       "name": "Prezzed Juicery",    "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
  //       "cuisines": [
  //         "Juices",
  //         "Healthy Food"
  //       ],
    
  //       "costForTwo": 25000,
  //       "deliveryTime": 44,
  //       "avgRating": "3.8"
  //     }
  //   },
  //   {
  //     "data": {
  //       "id": "209208",
  //       "name": "Second Res",
  //       "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
  //       "cuisines": [
  //         "Juices",
  //         "Healthy Food"
  //       ],
    
  //       "costForTwo": 25000,
  //       "deliveryTime": 44,
  //       "avgRating": "4.5"
  //     }
  //   },
  //   {
  //     "data": {
  //       "id": "209209",
  //       "name": "Third Res",
  //       "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
  //       "cuisines": [
  //         "Juices",
  //         "Healthy Food"
  //       ],
    
  //       "costForTwo": 25000,
  //       "deliveryTime": 44,
  //       "avgRating": "4.2"
  //     }
  //   },
  // ]);
  


  // Normal JS variable
  let listOfRestaurantsJS = [
  {
  "data": {
    "id": "209207",
    "name": "Prezzed Juicery",    "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
    "cuisines": [
      "Juices",
      "Healthy Food"
    ],

    "costForTwo": 25000,
    "deliveryTime": 44,
    "avgRating": "3.8"
  }
},
{
  "data": {
    "id": "209208",
    "name": "Second Res",
    "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
    "cuisines": [
      "Juices",
      "Healthy Food"
    ],

    "costForTwo": 25000,
    "deliveryTime": 44,
    "avgRating": "4.5"
  }
},
{
  "data": {
    "id": "209209",
    "name": "Third Res",
    "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
    "cuisines": [
      "Juices",
      "Healthy Food"
    ],

    "costForTwo": 25000,
    "deliveryTime": 44,
    "avgRating": "4.2"
  }
},
];
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            // filter logic here

            const filteredList =listOfRestaurants.filter((res) => res.data.avgRating > 4);
            setListOfRestaurants(filteredList);
            console.log(filteredList);

          }}>Top Rated Restraurant</button>
        </div>
        <div className="res-container">

          {/* BEST PRACTICE IS TO USE  */}
        
        {
          listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
        }
   
        </div>
      </div>
    )
  }


  export default Body;