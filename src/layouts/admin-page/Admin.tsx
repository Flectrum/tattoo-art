import { useEffect, useState } from "react";

interface Image {
  id: string;
  path: string;
}

export const Admin = () => {
  const BASE_URL = "http://localhost:8080/api";
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [images, setImages] = useState<Image[]>([]);

  async function upoloadImage() {
    const formData = new FormData();
    if (selectedImage !== null) {
      formData.append("image", selectedImage);
      const url = `${BASE_URL}/image`;

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        console.log("Something wrong");
        throw new Error("Something went wrong");
      }
    }
  }

  useEffect(() => {
    const fetchUserCurrentLoans = async () => {
      const url = `${BASE_URL}/image/getAll`;
      const requestOptions = {
        method: "GET",
      };
      const imagesResponse = await fetch(url, requestOptions);
      if (!imagesResponse.ok) {
        throw new Error("Something went wrong!");
      }

      const imagesResponseJson = await imagesResponse.json();
      setImages(imagesResponseJson);
    };
    fetchUserCurrentLoans();
  }, []);

  return (
    <>
      <form>
        <div className="flex m-3 relative justify-center w-80 items-center text-white border border-red-800 ">
          <input
            className="text-red-800"
            type="file"
            accept="image/jpeg, image/webp, image/png"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(e.target.files[0]);
              }
            }}
          />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="preview"
              className=" flex flex-wrap w-60 h-60"
            />
          )}
        </div>
        <button
          onClick={upoloadImage}
          className="text-white border border-white m-3"
        >
          <span className="m-3">Upload</span>
        </button>
      </form>
      <div className="relative flex flex-wrap h-50 gap-3">
        {images.map((image) => (
          <div key={image.id} className="w-50">
            <img src={`${BASE_URL}/image/file/${image.path}`} />
          </div>
        ))}
      </div>
    </>
  );
};
