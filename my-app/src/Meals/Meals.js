import { Fragment } from "react";
 import AvailabelMeals from "./AvailabelMeals"
import MealsSummary from "./MealsSummary";

const Meals=()=>{
    return<Fragment>
        <MealsSummary></MealsSummary>
         <AvailabelMeals></AvailabelMeals> 
    </Fragment>

}
export default Meals;