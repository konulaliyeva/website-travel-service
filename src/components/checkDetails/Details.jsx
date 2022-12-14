import React from "react";
import { AiFillAccountBook, AiFillStar } from "react-icons/ai";
import { data } from "../../data/data.js";
import { Link, useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function Details({ select }) {
  const navigate = useNavigate();

  const filtredData = data.filter((item) => item.region === select);

  return (
    <div className="relative w-full h-screen bg-zinc-900/60">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={filtredData[0].bcgimg}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form className="max-w-[420px] w-full mx-auto bg-white p-8 rounded-md ">
          <h2 className="text-2xl font-bold text-center py-4">
            {filtredData[0].name}
          </h2>
          <div className="flex justify-between py-8">
            <p
              className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center"
              href="#"
            >
              <AiFillAccountBook className="mr-2 text-[#5f58df]" />{" "}
              {filtredData[0].price} AZN
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <AiFillStar className="mr-2 text-[orange]" />{" "}
              {filtredData[0].star} Stars Hotel
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <p>{filtredData[0].about}</p>
          </div>
          <div className="flex flex-col ">
            <p>Rooms: {filtredData[0].rooms}</p>
            <p>Rating: {filtredData[0].rating}</p>

            <div className="w-full h-[2px] bg-indigo-600 mt-4 mb-4"></div>
            <p className="flex items-center mb-2">
              <HiLocationMarker size={20} className="mx-2  text-[red]" />{" "}
              <span className="font-merriweather text-sm text-gray">
                {filtredData[0].location}
              </span>
            </p>
          </div>
          <div className="flex justify-between ">
            <button
              className="w-[150px] py-3 mt-8 bg-red-600 hover:bg-red-700 relative text-white flex justify-center items-center rounded-md"
              onClick={() => navigate("/")}
            >
              <BsArrowLeft className="mx-2" size={20} />
              Back
            </button>
            <a 
              className="w-[150px] py-3 mt-8 bg-amber-500 hover:bg-amber-600 relative text-white flex justify-center items-center rounded-md "
             href={filtredData[0].book}
             target="_blank"
             rel='noreferrer'
            >
              Book
              <BsArrowRight className="mx-2" size={20} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
