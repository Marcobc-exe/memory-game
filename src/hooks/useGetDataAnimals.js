import { useEffect, useState } from "react";
import { handlerGetAnimals } from "../controllers/animals.controller";

const useGetDataAnimals = (cardsGame) => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    if (cardsGame == null) return;
    const cards = cardsGame / 2

    handlerGetAnimals(cards)
      .then((data) => {
        setEntries(data.entries);
        setMeta(data.meta);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setLoading(true);
    };
  }, [cardsGame]);

  return {
    loading,
    entries,
    meta,
  };
};

export { useGetDataAnimals };
