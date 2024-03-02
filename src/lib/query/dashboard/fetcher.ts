const getMasterData = async () => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops"
  );
  return await res.json();
};

const postNewWorkshop = async (body: any) => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([body]),
    }
  );
  return await res.json();
};

const deleteWorkshop = async (id: number) => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ condition: { id } }),
    }
  );
  return await res.json();
  // console.log(JSON.stringify({ condition: { id } }));
};

const getWorkshopDetail = async (id: string) => {
  if (id) {
    const res = await fetch(
      "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops?" +
        new URLSearchParams({
          search: JSON.stringify({ id: id }),
        })
    );
    return await res.json();
  }
};

const editWorkshopDetail = async (body: any) => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        condition: { id: body.id },
        set: body,
      }),
    }
  );
  return await res.json();
};

export {
  getMasterData,
  postNewWorkshop,
  deleteWorkshop,
  getWorkshopDetail,
  editWorkshopDetail,
};
