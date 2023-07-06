import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/resData";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {

  
const [resData, setresData] = useState(restaurantList);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={
            ()=>{
                 const resDataJS = resData.filter(
                (res) => res.data.avgRating > 4
              )
              setresData(resDataJS);
            }
            }>
              Top Rated Restaurant
          </button>
        </div>
       <div className="restaurant-list">
         {resData.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
         })}
       </div>
      </div>
    );
  };

  export default Body;