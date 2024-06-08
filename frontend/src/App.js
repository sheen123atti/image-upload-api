import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    getImage();
  }, []);
  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      // "http://localhost:5000/upload-image",
      "https://image-upload-api-3epj.onrender.com/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const getImage = async () => {
    // const result = await axios.get("http://localhost:5000/get-image");
    const result = await axios.get("https://image-upload-api-3epj.onrender.com/get-image");
    console.log(result);
    setAllImage(result.data.data);
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input type="text" placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}} />
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <>
              <p>{data.price}</p>
              <img
                // src={require(`./images/${data.image}`)}
                // src={require(`../backend/public/images/${data.image}`)}
                
                // src={`http://localhost:5000/images/${data.image}`}
                src={`https://image-upload-api-3epj.onrender.com/images/${data.image}`}
                height={100}
                width={100}
                alt={data.image}
              />
              </>
            );
          })}
    </div>
  );
}
export default App;
