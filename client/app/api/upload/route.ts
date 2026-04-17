import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", file);
    cloudinaryFormData.append(
      "upload_preset",
      process.env.CLOUDINARY_UPLOAD_PRESET!,
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: cloudinaryFormData,
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Cloudinary error:", data);
      return NextResponse.json(
        { error: data.error?.message || "Upload to Cloudinary failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: data.secure_url });
  } catch (error) {
    console.log(error);
  }
}
