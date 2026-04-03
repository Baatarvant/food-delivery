type Credentials = {
  email: string;
  password: string;
};

export type SignInResponse = {
  accessToken: string;
};

export const signIn = async (credentials: Credentials) => {
  const response = await fetch(
    "https://food-delivery-1-xc22.onrender.com/api/user/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    },
  );

  const data = (await response.json()) as SignInResponse;

  return data;
};
