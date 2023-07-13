import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { updateModelarray } from "./component/FilterSlice";
import { cars } from "./component/DataBase";

const Home = () => {
  const [name, setName] = useState("");
  const [modelImg, setModelImg] = useState('');
  const [addProduction, setAddProduction] = useState(false);

  const dispatch = useDispatch();
  const { model } = useSelector((store) => store.model);

  const modelImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setModelImg(dataURL);
      };
  
      reader.readAsDataURL(file);
    }
  };

 
  const handleSubmit = () => {

    const newModel = {
      id: uuidv4(),
      name: name,
      modelimg: modelImg,
    };

    dispatch(updateModelarray(newModel));
    setAddProduction(false);
  };


  return (
    <>
      {model.length > 0 && (
        <div className="flex justify-center mt-8 text-4xl font-bold">
          <h1>Our Models</h1>
        </div>
      )}
      <div className="p-5 mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {model.map((item) => (
          <div
            key={item.id}
            className="hover:shadow-md border-2 w-[170px] pb-4 mr-4 flex flex-col justify-center items-center mb-4"
          >
            <img
              src={item.modelimg}
              className="w-36 h-36 object-contain"
              alt={item.name}
            />
            <h1 className="font-medium">{item.name}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="w-32 border-[2px] bg-blue-300 p-1 mb-6"
          onClick={() => setAddProduction(true)}
        >
          Add Production
        </button>
      </div>
      {addProduction && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-[350px] h-80 items-start pl-2 justify-center gap-2 border bg-white relative rounded-2xl">
            <h1>Model</h1>
            
              <div className="flex">
                <label className="font-medium">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Model name"
                />
              </div>
              <div className="flex justify-around">
                <label className="font-medium">Model image:</label>
                <input
                  type="file"
                  onChange={modelImageChange}
                  placeholder="Model image"
                />
              </div>
              <button
                className="border ml-28 px-6 py-2 bg-blue-500 rounded-2xl"
                type="submit"
              >
                Submit
              </button>
          </div>
            </form>
          <ImCross
            className="absolute ml-[280px] mb-[250px]"
            onClick={() => setAddProduction(false)}
          />
        </div>
      )}
    </>
  );
};

export default Home;
