import { getAnimals } from "../api/animals.store";

const handlerGetAnimals = async (cards) => {
  try {
    const response = await getAnimals(cards);

    if (response.status === 200) {
      return response.data;
    } else {
      console.warn("Warning: response status is not a 200");
      return response.status;
    }
  } catch (error) {
    console.log("Handling error!");
    console.log(error);
  }
};

export { handlerGetAnimals };
