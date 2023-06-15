// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

06-06-2023
Running cmd
npx parcel index.html

TO CREATE BUILD USE BELOW CMD
npx parcel build index.html

-----------
EP-04 
OPTIMISED THE CODE IN THE COMPONENT RENDER AND HOW WE CAN DECLARE THE OBJECT FROM DATA COMING FROM THE BACKEND USING THE CONST ONCE AND USE THE VARIABLE ALONE WHEN REDUCE THE CODE IN THE JSX AND COMPONENT RENDER

  
          {/* Neever use index as key in react, it is best practice to use id as key in map function */}
  
          {/* USING ID AS KEY */}
        
        {
          resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
        }
  
        {/* USING INDEX AS KEY */}
  
       {/* {
          resList.map((restaurant, index) => <RestaurantCard key={index} resData = {restaurant}/>)
        } */}

EP-05 - Let's get hooked
Part - 01
CREATED THE STANDARD FOLDER STRUCTURE -SRC, INSTEAD OF ADDING ALL THE COMPONENT IN THE IN THE SAME FILE, CREATED DIFFERENT COMPONENT FOR EACH, EXAMPLE HEADER, BODY, RESTUARANT, ETC,..

Part - 02

- usestate() CODING AND UNDERSTANDING
# React Hooks
(Normal JS utility functions)
- useState()
- useEffect()
