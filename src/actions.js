"use server";

// import { fetchpets } from "@/actions";
// import PetCard from "./app/pets/components/PetsContainer/PetsList/PetCard";
const headers = new Headers();
headers.append("Content-Type", "application/json");

const baseUrl = "https://pets-react-query-backend.eapi.joincoded.com";

export async function newPet(formData) {
  const petData = {
    ...Object.fromEntries(formData),
    adopted: 0,
  };

  const response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers,
    body: JSON.stringify(petData),
  });

  const newPet = await response.json();
  return newPet;
}

// export async function findPet(params) {
//   const { id } = await params;
//   const pets = await fetchpets();
//   const pet = pets.find((pet) => pet.id === +id);
//   return <PetCard pet={pets}></PetCard>;

// }
