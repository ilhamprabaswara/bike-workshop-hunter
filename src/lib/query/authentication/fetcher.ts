const postRegisterUser = async (body: any) => {
  const { email, password_hash } = body;
  const res = await fetch(
    "https://api.steinhq.com/v1/storages/65df429c4a64236312092d63/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          email,
          password_hash,
          created_at: new Date().toISOString(),
        },
      ]),
    }
  );
  return await res.json();
};

export { postRegisterUser };
