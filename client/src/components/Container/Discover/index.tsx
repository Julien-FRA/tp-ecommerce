import React from "react";
import { LargeProductCard } from "../../Card/LargeProduct";
import "./style.scss";

export const DiscoverContainer = () => {
  return (
    <div className="discover-container">
      <LargeProductCard />
      <LargeProductCard />
    </div>
  );
};
