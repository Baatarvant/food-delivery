"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { RefObject, useState } from "react";

const present = "food-images";

type CldUploadProps = {
  onImage: (val: string) => void;
};

export const CldUpload = ({ onImage }: CldUploadProps) => {
  const [image, setImage] = useState("");

  const onUploadImage = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;

    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
      onImage(info.secure_url);
    }
  };

  return (
    <div>
      <CldUploadWidget uploadPreset={present} onSuccess={onUploadImage}>
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>

      {image && <img src={image} alt="image" height={50} />}
    </div>
  );
};
