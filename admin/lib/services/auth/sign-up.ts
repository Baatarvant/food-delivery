type Credentials = {
  email: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  try {
    await fetch("http://localhost:3001/users", {
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
