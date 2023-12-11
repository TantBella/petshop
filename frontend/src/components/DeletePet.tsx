import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Pet {
  id: number;
  name: string;
  animal: string;
  color: string;
  age: number;
  price: number;
}

const BuyPet = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("/buypet");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    };

    fetchPets();
  }, []);

  const handleBuyClick = (pet: Pet) => {
    setSelectedPet(pet.id);
  };

  const handleConfirmBuy = async () => {
    if (selectedPet) {
      const response = await fetch("/buypet", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedPet }),
      });

      if (response.ok) {
        alert(`Ditt köp gick igenom! Ta väl hand om din nya kompis <3 `);
        setSelectedPet(null);
        navigate("/pets");
      } else {
        console.error("Error buying pet");
      }
    }
  };

  return (
    <div>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.animal} - {pet.price} kr{" "}
            <button onClick={() => handleBuyClick(pet)}>Köp</button>
          </li>
        ))}
        {pets.length === 0 && <p> Alla djur är sålda </p>}
      </ul>

      {selectedPet && (
        <div>
          <p>Vill du köpa {selectedPet.name}?</p>
          <button onClick={handleConfirmBuy}>Ja</button>
          <button onClick={() => setSelectedPet(null)}>Avbryt</button>
        </div>
      )}
    </div>
  );
};

export default BuyPet;
