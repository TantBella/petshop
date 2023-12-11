// Här kan man välja ett djur att köpa och då raderas det ur databasen

import React, { useState } from "react";
import DeletePet from "../components/DeletePet";

const ShopPet = () => {
  return (
    <div className="main">
      <div>
        <h1>Köp ett djur</h1>
        <p>Välj vilket djur du vill köpa:</p>

        <DeletePet />
      </div>
    </div>
  );
};

export default ShopPet;
