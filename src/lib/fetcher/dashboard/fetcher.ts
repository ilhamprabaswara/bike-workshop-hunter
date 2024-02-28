const getMasterData = async () => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops"
  );
  return await res.json();
};

export { getMasterData };
