import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  animal: string;
  color: string;
  age: string;
  price: string;
}

const PostPet = () => {
  const navigate = useNavigate();
  const [petName, setPetName] = useState<string>("");
  const [animal, setAnimal] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleFormValues = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formvalues: FormValues = {
      name: petName,
      animal: animal,
      color: color,
      age: age,
      price: price,
    };

    console.log("Info som ska sparas: ", { formvalues });

    fetch("/addpet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
      .then((apiResponse) => {
        if (apiResponse.status === 201) {
          console.log("Pet created successfully");
          navigate("/");
          console.log("det borde ha fnukat");
        } else {
          console.error("Error creating pet:", apiResponse);
        }
      })
      .catch((error) => {
        console.error("Error creating pet", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleFormValues}>
        <input
          placeholder={"Petname"}
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <input
          placeholder={"Animal"}
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />
        <input
          placeholder={"Color"}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          placeholder={"Age"}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder={"Price"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostPet;
