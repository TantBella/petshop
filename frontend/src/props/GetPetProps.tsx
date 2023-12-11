interface GetPetProps {
  fetchData: () => void;
  petData: PetStore[];
  isLoading: boolean;
}

export default GetPetProps;
