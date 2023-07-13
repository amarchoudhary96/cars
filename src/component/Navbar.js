import React, { useEffect, useState } from "react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { updateModel } from "./ModelSlice";
import { updatearray, updateFilter, updateid, updatesearch } from "./FilterSlice";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const dispatch = useDispatch();
  const { filterproduct } = useSelector((store) => store.filter);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [addProduction, setAddProduction] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [modelImg, setModelImg] = useState(null);

  const handleSubmit = () => {
    const newProduct = {
      company: company,
      img: img,
      id: uuidv4(),
      model: [],
    };
    newProduct.model.push({ name: name, modelimg: modelImg, id: uuidv4() });

    dispatch(updatearray(newProduct));
    console.log(newProduct);
  };

  const handleClick = (item1, item2) => {
    console.log(item1,item2);
    dispatch(updateModel(item1));

    dispatch(updateid(item2));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(updatesearch(searchTerm));
  }, [searchTerm]);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImg(URL.createObjectURL(file));
    }
  };

  const modelImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setModelImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center h-14 bg-slate-200">
        <div className="text-2xl font-medium pl-4">
          <BsLayoutTextSidebar onClick={toggleSidebar} />
        </div>
      </div>
      <div
        className={`bg-white w-full h-full fixed top-0 left-0 z-50 transition-transform duration-300 overflow-y-scroll ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center items-center py-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-2 h-[43px] bg-blue-200 text-black rounded-r-md hover:bg-blue-200">
            Search
          </button>
        </div>
        <div className="flex justify-center mt-8 text-4xl font-bold">
          <h1>Our Production</h1>
        </div>
        <div
          className="mt-8 ml-4 grid grid-cols-2 md:grid-cols-4 gap-3"
          onClick={toggleSidebar}
        >
          {filterproduct.map((item) => (
            <div
              key={item.id}
              className="hover:shadow-md border-2 w-30 pb-4 mr-4 flex flex-col justify-center items-center mb-4"
              onClick={() =>handleClick(item.model, item.id)}
            >
              <img
                src={item.img}
                className="w-36 h-36 object-contain"
                alt={item.company}
              />
              <h1 className="font-medium">{item.company}</h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 ">
          <button
            className="w-32 border-[2px] bg-blue-300 p-1 mb-6"
            onClick={() => setAddProduction(true)}
          >
            Add Production
          </button>
        </div>
        {!addProduction && (
          <ImCross
            onClick={toggleSidebar}
            className="absolute top-4 right-2 text-2xl cursor-pointer"
          />
        )}
      </div>
      {addProduction && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
          <div className="flex flex-col w-[350px] h-80 items-start pl-2 justify-center gap-2 border bg-white relative rounded-2xl">
            <div className="flex">
              <label className="font-medium">Company:</label>
              <input
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
              />
            </div>
            <div className="flex justify-around">
              <label className="font-medium">Image:</label>
              <input
                type="file"
                onChange={handleImageChange}
                placeholder="Image"
              />
            </div>
            <hr />
            <h1>Model</h1>
            <div className="flex">
              <label className="font-medium">Name:</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Model name"
              />
            </div>
            <div className="flex justify-around">
              <label className="font-medium">Model Image:</label>
              <input
                type="file"
                onChange={modelImageChange}
                placeholder="Model image"
              />
            </div>
            <button
              className="border ml-28 px-6 py-2 bg-blue-500 rounded-2xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <ImCross
            className="absolute ml-[280px] mb-[250px]"
            onClick={() => setAddProduction(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
