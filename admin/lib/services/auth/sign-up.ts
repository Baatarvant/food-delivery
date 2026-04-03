type Credentials = {
  email: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  try {
    await fetch("https://food-delivery-1-xc22.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  } catch (error) {
    console.log(error);
  }
};
