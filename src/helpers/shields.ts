import { HogwartsHouse } from "@/interfaces/Character";

export const shieldsHouseSrc = (house: HogwartsHouse) => {
    return (
      {
        [HogwartsHouse.Gryffindor]: "/assets/images/gryffindor.png",
        [HogwartsHouse.Hufflepuff]: "/assets/images/hufflepuff.png",
        [HogwartsHouse.Ravenclaw]: "/assets/images/ravenclaw.png",
        [HogwartsHouse.Slytherin]: "/assets/images/slytherin.png",
      }[house] || ""
    );
  };


  export const shieldsHouseColor = (house: HogwartsHouse) => {
    return (
      {
        [HogwartsHouse.Gryffindor]: `text-[#710000]`,
        [HogwartsHouse.Hufflepuff]: `text-[#FF9D00]`,
        [HogwartsHouse.Ravenclaw]: `text-[#143256]`,
        [HogwartsHouse.Slytherin]: `text-[#008525]`,
      }[house] || ""
    );
  }