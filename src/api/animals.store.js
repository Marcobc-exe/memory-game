import { api } from "./config";

const getAnimals = async (cards) => {
  try {
    const abortController = new AbortController();
    const response = await api.get(
      `api/content/spaces/animals/types/game/entries?per_page=${cards}`,
      {
        headers: { "Content-Type": "application/json" },
        signal: abortController.signal,
      }
    );

    return response;
  } catch (error) {
    console.log("Error getting animals data:");
    console.log(error);
  }
};

export { getAnimals };
