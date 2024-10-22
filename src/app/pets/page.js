import PetsContainer from "./components/PetsContainer";

async function PetsPage() {
  const respone = await fetch(
    "https://pets-react-query-backend.eapi.joincoded.com/pets"
  );
  const pets = await respone.json();
  return <PetsContainer pets={pets} />;
}

export default PetsPage;
