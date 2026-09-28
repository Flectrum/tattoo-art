import { useEffect, useState } from "react";

interface Image {
  id: string;
  path: string;
}

export const Admin = () => {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [isImageRemoved, setIsImageRemoved] = useState(false);

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
      setIsImageRemoved(false);
    };
    fetchUserCurrentLoans();
  }, [BASE_URL, isImageRemoved]);

  const deleteImage = async (fileName: string) => {
    console.log("CLICKED!");
    const response = await fetch(`${BASE_URL}/image/file/${fileName}`, {
      method: "DELETE",
    });
    setIsImageRemoved(true);
    return response.json();
  };

  return (
    <>
      <div className="relative px-5 lg:px-20">
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

        <div className="grid w-full lg:w-1/2 gap-2 grid-cols-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex items-center justify-center group relative aspect-square overflow-hidden rounded focus-visible:outline-none object-center"
            >
              <img
                src={`${BASE_URL}/image/file/${image.path}`}
                alt="tattoo"
              ></img>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
              <button
                className="absolute right-2 top-2 text-white"
                onClick={() => deleteImage(image.path)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
