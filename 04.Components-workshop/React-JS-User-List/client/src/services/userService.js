const BASE_URL = `http://127.0.0.1:3030/jsonstore/users/`;

export const getAll = async () => {
  const response = await fetch(BASE_URL);
  const result = await response.json();

  const data = Object.values(result);

  return data;
};

export const create = async (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    imageUrl: data.imageUrl,
    phoneNumber: data.phoneNumber,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  getAll();
  return result;
};

export const getUserInfo = async (userId) => {
  const response = await fetch(`${BASE_URL}${userId}`);
  const result = await response.json();

  return result;
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${BASE_URL}${userId}`, { method: "DELETE" });
  const result = await response.json();

  return result;
};
