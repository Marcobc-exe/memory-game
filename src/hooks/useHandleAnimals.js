import { useEffect, useState } from "react";

const useHandleAnimals = (loadingData, entries) => {
  const [loading, setLoading] = useState(true);
  const [listAnimals, setListAnimals] = useState([]);

  useEffect(() => {
    if (loadingData || !entries.length) return;

    const listAnimals = entries.map((animal, index) => ({
      id: index,
      name: animal.meta.name,
      img: animal.fields.image.url,
    }));

    setLoading(false);
    setListAnimals(listAnimals);
  }, [loadingData, entries]);

  return {
    loading,
    listAnimals,
  };
};

export { useHandleAnimals };
