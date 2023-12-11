// Här ska komponent för att lägga till djur och uppdatera djur finnas
import PostPet from "../components/PostPet";

const Admin = () => {
  return (
    <>
      <div>
        <h1>Admin-sida</h1>
      </div>
      <div>
        <h1>Lägg till fler djur:</h1>
        <PostPet />
      </div>
    </>
  );
};

export default Admin;
