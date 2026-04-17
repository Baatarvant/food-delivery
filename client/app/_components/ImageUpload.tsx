"use client";

import {
  CldUploadWidget,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

type ImageUploadProps = {
  onUpload?: (url: string) => void;
};

export const ImageUpload = ({ onUpload }: ImageUploadProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;
    if (typeof info === "object" && info.secure_url) {
      setImageUrl(info.secure_url);
      onUpload?.(info.secure_url);
    }
  };

  return (
    <div>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={handleSuccess}
      >
        {({ open }) => (
          <button type="button" onClick={() => open()}>
            Upload Image
          </button>
        )}
      </CldUploadWidget>

      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" width={200} height={200} />
          <p>{imageUrl}</p>
        </div>
      )}
    </div>
  );
};
