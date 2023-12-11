import React, { useState, useEffect } from "react";

interface Pet {
  id: number;
  name: string;
  animal: string;
  color: string;
  age: number;
  price: number;
}

const GetPet = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result: Pet[]) => setPets(result));
  }, []);

  return (
    <>
      {pets.map((pet: Pet) => (
        <ul className="petlist" key={pet.id}>
          <li>
            <strong> Namn:</strong> {pet.name}
          </li>
          <li>
            <strong> Djur: </strong> {pet.animal}
          </li>
          <li>
            <strong>Färg: </strong>
            {pet.color}
          </li>
          <li>
            <strong> Pris: </strong> {pet.price}
          </li>
        </ul>
      ))}
      {pets.length === 0 && <p> Alla djur är sålda </p>}
    </>
  );
};

export default GetPet;
