import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Book = ({ select, setSelect }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Check for Hotels & Resorts</h2>
          <p className="py-4">
            Do you want to explore Azerbaijan in your own time? Do you want to
            set your own itinerary? If so, wherever your interests lie, and
            however you like to travel, the beauty of arranging a tailor-made
            trip is that it will be created uniquely for you, and the
            inspiration you find here is just a taste of what’s possible. You
            might want to feed a lifelong passion for wildlife or culture,
            discover Azerbaijan by helicopter or bus, or this could be your
            first step to planning your honeymoon, a celebratory trip or a
            family adventure. Need assistance? Our travel consultants are happy
            to change or amend any one of the tours we offer in order to create
            the perfect getaway for you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Booking Service</h3>
              <p className="py-1 mx-4">Plan your great journey here</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Advising Service</h3>
              <p className="py-1 mx-4">Ready to help you till the end</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL INFO</p>
          <p className="py-4">Plan Your Journey!</p>
          <p className="bg-gray-800 text-gray-200 py-2">Check It Now</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select
              className="border rounded-md p-2"
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="Shaki">Shaki</option>
              <option value="Gabala">Gabala</option>
              <option value="Shamakhi">Shamakhi</option>
              <option value="Oghuz">Oghuz</option>
              <option value="Mingachevir">Mingachevir</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4" onClick={() => navigate("/profile")}>
            Check Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
