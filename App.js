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
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const { resData } = props; 
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+resData.data.cloudinaryImageId} />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating} star</h4>
      <h4>₹{resData.data.costForTwo / 100}</h4>
      <h4>{resData.data.deliveryTime} Minutes</h4>

    </div>
  )
}

const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "209207",
      "name": "Prezzed Juicery",
      "uuid": "62bb23f0-348e-47fa-a892-b6e133937762",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
      "cuisines": [
        "Juices",
        "Healthy Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "prezzed-juicery-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Prezzed Juicery 1st Block Koramangala Bengaluru Karnataka India",
      "locality": "1st Block",
      "parentId": 21231,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7056398~p=1~eid=00000188-9429-a7ae-0419-896400100149",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "209207",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.6",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "201224",
      "name": "Asha tiffins",
      "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
      "city": "1",
      "area": "HSR Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "cuisines": [
        "Indian",
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 6.599999904632568,
      "slugs": {
        "restaurant": "asha-tiffins-hsr-hsr-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
      "locality": "7th Sector",
      "parentId": 236243,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "201224",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 6.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "685759",
      "name": "The Rameshwaram Cafe",
      "uuid": "fdb239ce-4023-40fa-8720-5321c236e64b",
      "city": "1",
      "area": "J P Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 7,
      "slugs": {
        "restaurant": "the-rameshwaram-cafe-jp-nagar-jp-nagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "52, Outer Ring Rd, Jeewan Griha Colony, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
      "locality": "Jeewan Griha Colony",
      "parentId": 384316,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "685759",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 7,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "336364",
      "name": "Third Wave Coffee",
      "uuid": "0beefd12-749b-4550-a3b6-bea048256bb1",
      "city": "1",
      "area": "Ashok Nagar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
      "cuisines": [
        "Beverages",
        "Bakery",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 2.5999999046325684,
      "slugs": {
        "restaurant": "third-wave-coffee-roasters-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Sy No.52/2, \"Sujay's Pride\", Church Street, Bangalore, B.B.M.P East, Karnataka-560001",
      "locality": "Church Street",
      "parentId": 274773,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6948789~p=22~eid=00000188-9429-a7ae-0419-896b0010161e",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "336364",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 2.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "118278",
      "name": "Namaste",
      "uuid": "55394489-ff7d-4a73-bcca-35ebc0eb5783",
      "city": "1",
      "area": "2nd Stage",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "wya5kg7wxvbh5opfpo1m",
      "cuisines": [
        "South Indian",
        "Thalis",
        "Snacks",
        "Biryani",
        "Indian",
        "Chinese",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 49,
      "minDeliveryTime": 49,
      "maxDeliveryTime": 49,
      "slaString": "49 MINS",
      "lastMileTravel": 6,
      "slugs": {
        "restaurant": "namaste-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "69, 7th Main Road, BTM 2nd Stage, Bangalore - 76",
      "locality": "BTM Layout",
      "parentId": 366271,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "118278",
        "deliveryTime": 49,
        "minDeliveryTime": 49,
        "maxDeliveryTime": 49,
        "lastMileTravel": 6,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "2415",
      "name": "Veena Stores",
      "uuid": "450ddba7-89d1-4317-91a9-d3e559f56587",
      "city": "1",
      "area": "Malleshwaram",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "vt1mquaxmeugaf9dl5pp",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 8.5,
      "slugs": {
        "restaurant": "veena-stores-malleshwaram",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#187, 15th Cross, Margosa Road, Malleshwaram",
      "locality": "Margosa Road",
      "parentId": 20940,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 6700,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6700",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "2415",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "34301",
      "name": "Sri Udupi Park (100ft Road)",
      "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chaat",
        "Beverages",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 6.300000190734863,
      "slugs": {
        "restaurant": "sri-udupi-park-indiranagar-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
      "locality": "Defence Colony",
      "parentId": 194697,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5100,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5100,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5100",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "34301",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 6.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "3883",
      "name": "Vidyarthi Bhavan",
      "uuid": "3f4171f1-63c4-461a-a21d-01e5aaa624c6",
      "city": "1",
      "area": "Basavanagudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "tvur6lwwvnd2euflpswm",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "vidhyarthi-bhavan-basavanagudi",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#32, Gandhi Bazar Main Road, Basvangudi, Bangalore-04",
      "locality": "Gandhi Bazaar Main Road",
      "parentId": 20949,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "3883",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "660675",
      "name": "Cafe Amudham",
      "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3.700000047683716,
      "slugs": {
        "restaurant": "cafe-amudham-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
      "locality": "5th Block Kormangala",
      "parentId": 396620,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7062416~p=10~eid=00000188-9429-a7ae-0419-896700100a20",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "660675",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3.700000047683716,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "53512",
      "name": "Vijayalakshmi Veg",
      "uuid": "cff6f5ee-b7e1-4149-910c-64e65cf5f85c",
      "city": "1",
      "area": "Jayanagar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "b0aqq5x8qobauhv6iyhr",
      "cuisines": [
        "South Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 14000,
      "costForTwoString": "₹140 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "vijayalakshmi-veg-jayanagar-jayanagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Sagar hospital swagath main road tilaknagar Bangalore 41",
      "locality": "Tilaknagar",
      "parentId": 20046,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "53512",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 3.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56428",
      "name": "Puliyogare Point",
      "uuid": "49970568-119d-436c-9dad-042d9c07c7ff",
      "city": "1",
      "area": "Basavanagudi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 48,
      "minDeliveryTime": 48,
      "maxDeliveryTime": 48,
      "slaString": "48 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "puliyogare-point-basavanagudi-basavanagudi",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No 81, East Anjaneya Temple Street, N.R Colony, Basavanagudi",
      "locality": "N.R Colony",
      "parentId": 8409,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "56428",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "uuid": "2ecdca25-3954-4f2e-8d50-4e13e2faf73e",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "r4ufflqojich0r29efvc",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "leon-grill-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
      "locality": "Koramangala",
      "parentId": 371281,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7058158~p=13~eid=00000188-9429-a7ae-0419-896800100d45",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "65797",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "418859",
      "name": "Udupi Shanthi Sagar",
      "uuid": "c581c198-95b7-47ff-8768-dc5573d01d67",
      "city": "1",
      "area": "Frazer Town",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "rlfcmogwwbrgi1xa4owk",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "udupi-shanthi-sagar-frazer-town-frazer-town",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "8, Coles Rd, Cleveland Town, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
      "locality": "Cleveland Town",
      "parentId": 233016,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "418859",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "107476",
      "name": "Davanagere Benne Dose",
      "uuid": "0843868d-938f-4a52-9830-d872172f7d22",
      "city": "1",
      "area": "Jayanagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "qz6bnyiainw6carl2vei",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "davanagere-benne-dosa-jayanagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#20/2, 26th main road, puttenapalya( opp ganesha temple) jayanagar 9th block, bangalore",
      "locality": "9th Block",
      "parentId": 399029,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "107476",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "443387",
      "name": "Flying Kombucha",
      "uuid": "54111d0b-64a7-4a31-89da-d04a664d3664",
      "city": "1",
      "area": "MG Road",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "tijsbzeyx2tgxexipdx5",
      "cuisines": [
        "Healthy Food",
        "Beverages",
        "Juices"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "flying-kombucha-majestic-majestic-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#54, 1st Floor, Monarch Plaza, Brigade Rd, Bengaluru, 560001",
      "locality": "Brigade road",
      "parentId": 80695,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7058266~p=16~eid=00000188-9429-a7ae-0419-896900101019",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "443387",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      <RestaurantCard resData = {resList[0]}/>
      <RestaurantCard resData = {resList[1]}/>
      <RestaurantCard resData = {resList[2]}/>
       <RestaurantCard resData = {resList[3]}/>
       <RestaurantCard resData = {resList[4]}/>
       <RestaurantCard resData = {resList[5]}/>
       <RestaurantCard resData = {resList[6]}/>
       <RestaurantCard resData = {resList[7]}/>
       <RestaurantCard resData = {resList[8]}/>
       <RestaurantCard resData = {resList[9]}/>
       <RestaurantCard resData = {resList[10]}/>
       <RestaurantCard resData = {resList[11]}/>



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
