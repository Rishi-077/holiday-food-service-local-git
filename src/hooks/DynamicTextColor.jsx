import { useEffect, useState } from "react";

export default function useDynamicTextColor(
  imageUrl,
  sampleX = 50,
  sampleY = 50
) {
  const [textColor, setTextColor] = useState("#000"); // default black

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Read pixel color
      const pixel = ctx.getImageData(sampleX, sampleY, 1, 1).data;
      const [r, g, b] = pixel;

      // Calculate brightness
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      if (brightness < 128) {
        setTextColor("#fff"); // dark background → white text
      } else {
        setTextColor("#000"); // light background → black text
      }
    };
  }, [imageUrl]);

  return textColor;
}
