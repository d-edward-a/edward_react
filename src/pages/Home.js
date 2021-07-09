import React from "react";
import ProfileForHome from "../components/profile/ProfileForHome";
import TravelForHome from "../components/gallery/TravelForHome";
import FoodForHome from "../components/food/FoodForHome";

export const Home = () => {
    return (
        <>
            <ProfileForHome />
            <TravelForHome />
            <FoodForHome />
        </>
    )
}
