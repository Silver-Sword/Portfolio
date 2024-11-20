export async function getImageAspectRatio(imageUrl: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width / img.height);
    };
    img.onerror = (error) => {
      console.error("Error loading image:", error);
      resolve(1); // Default to square aspect ratio if there's an error
    };
    img.src = imageUrl;
  });
}
