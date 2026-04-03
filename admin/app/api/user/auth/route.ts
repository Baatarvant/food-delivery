import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export type SignInResponse = {
  accessToken: string;
};

export async function POST(request: Request) {
  const credentials = await request.json();

  const cookieStore = await cookies();

  const response = await fetch(
    "https://food-delivery-1-xc22.onrender.com/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    },
  );

  const data = (await response.json()) as SignInResponse;

  cookieStore.set("token", data.accessToken);

  return NextResponse.json({ success: true });
}
