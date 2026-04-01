import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { CartItem } from "@/lib/types/common";

const getCart = async (): Promise<CartItem[]> => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("cart")?.value;
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

const saveCart = async (cart: CartItem[]) => {
  const cookieStore = await cookies();
  cookieStore.set("cart", JSON.stringify(cart));
};

export const GET = async () => {
  const cart = await getCart();
  return NextResponse.json({ cart });
};

export const POST = async (req: NextRequest) => {
  const { foodId, name, price } = await req.json();
  const cart = await getCart();

  const existing = cart.find((item) => item.foodId === foodId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ foodId, name, price, quantity: 1 });
  }

  await saveCart(cart);
  return NextResponse.json({ cart });
};

export const PUT = async (req: NextRequest) => {
  const { foodId, quantity } = await req.json();
  let cart = await getCart();

  if (quantity <= 0) {
    cart = cart.filter((item) => item.foodId !== foodId);
  } else {
    const existing = cart.find((item) => item.foodId === foodId);
    if (existing) {
      existing.quantity = quantity;
    }
  }

  await saveCart(cart);
  return NextResponse.json({ cart });
};

export const DELETE = async (req: NextRequest) => {
  const { foodId } = await req.json();
  const cart = (await getCart()).filter((item) => item.foodId !== foodId);
  await saveCart(cart);
  return NextResponse.json({ cart });
};
