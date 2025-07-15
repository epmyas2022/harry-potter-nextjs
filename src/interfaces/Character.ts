export interface Character {
    fullName:      string;
    nickname:      string;
    hogwartsHouse: HogwartsHouse;
    interpretedBy: string;
    children:      string[];
    image:         string;
    birthdate:     string;
    index:         number;
}

export enum HogwartsHouse {
    Gryffindor = "Gryffindor",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw",
    Slytherin = "Slytherin",
}
