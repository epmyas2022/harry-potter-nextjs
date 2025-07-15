import { Character } from "@/interfaces/Character";



const API_URL = "https://potterapi-fedeperin.vercel.app/es";


export const getAllCharacters = async (search?: string): Promise<Character[]> => {
  const response = await fetch(`${API_URL}/characters?search=${search || ""}`);
  return response.json();
};


export const getCharacterByIndex = async (index: number): Promise<Character> => {
  const response = await fetch(`${API_URL}/characters/?index=${index}`);
  return response.json();
};