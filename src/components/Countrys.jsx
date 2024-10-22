import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countrys() {
  const [countrys, setCountrys] = useState([]);
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  const handleTravel = (country) => {
    setTravel([...travel, country]);
  };

  return (
    <>
      {/* Added To Travel list  */}
      <div className=" mt-10   text-center ">
        <h2 className="text-2xl font-medium ">
          All Country: {countrys.length}
        </h2>
        <h2 className="text-2xl font-medium">
          Added To Travel list: {travel.length}
        </h2>
      </div>
      <div className="   my-10 rounded-lg bg-slate-300 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 items-center">
          {travel.map((country) => (
            <div
              className=" border shadow rounded-md w-60 md:w-full mx-auto  bg-white m-5"
              key={country.cca3}
            >
              <h2 className="text-lg font-medium text-center my-2">
                {country.name.common}
              </h2>
              <img
                className="w-60 md:w-full h-36 rounded-b-md "
                src={country.flags.png}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* All Country */}
      <div className="my-4 container mx-auto gap-7  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {" "}
        {countrys.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleTravel={handleTravel}
          ></Country>
        ))}
      </div>
    </>
  );
}
