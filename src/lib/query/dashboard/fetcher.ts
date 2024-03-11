const getWorkshopsSummary = async () => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/summary"
  );
  return await res.json();
};

const getWorkshopsList = async () => {
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops"
  );
  const workshopsList = await res.json();
  return workshopsList.filter((workshop: { id: string }) => workshop.id);
};

const postNewWorkshop = async (body: any) => {
  const objDate = new Date();
  const workshopItem = {
    ...body,
    id: objDate.valueOf(),
    date_added: `${objDate.getFullYear()}-${objDate.getMonth() + 1}-${objDate.getDate()} ${objDate.getHours()}:${objDate.getMinutes()}:${objDate.getSeconds()}`,
  };
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/workshops",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([workshopItem]),
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
  getWorkshopsSummary,
  getWorkshopsList,
  postNewWorkshop,
  deleteWorkshop,
  getWorkshopDetail,
  editWorkshopDetail,
};
