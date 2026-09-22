import { useEffect, useState } from "react";

interface Image {
  id: string;
  path: string;
}

export const Admin = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [images, setImages] = useState<Image[]>([]);

  async function upoloadImage() {
    const formData = new FormData();
    if (selectedImage !== null) {
      formData.append("image", selectedImage);
      console.log("image is not null!");
      const url = `http://localhost:8080/api/image`;

      const requestOptions = {
        method: "POST",
        body: formData,
      };

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        console.log("Something wrong");
        throw new Error("Something went wrong");
      } else {
        console.log("Image sended!");
      }
    } else {
      console.log("Selected image is null");
    }
  }

  // TEST !!!!

  useEffect(() => {
    const fetchUserCurrentLoans = async () => {
      const url = `http://localhost:8080/api/image/getAll`;
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
            placeholder="Choose your file..."
            accept="image/jpeg, image/webp, image/png"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedImage(e.target.files[0]);
                console.log("Image selected" + e.target.files[0].name);
              }
            }}
          />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="preview"
              style={{ maxWidth: "200px" }}
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
      <div className="relative flex gap-3">
        {images.map((image) => (
          <div key={image.id} className="w-50">
            <img src={`http://localhost:8080/api/image/file/${image.path}`} />
          </div>
        ))}
      </div>
    </>
  );
};
