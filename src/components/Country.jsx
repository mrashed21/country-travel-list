export default function Country({ country, handleTravel }) {
  const { name, flags, capital, population, area } = country;

  return (
    <div className=" w-80 md:w-full mx-auto  border-2 border-gray-500 rounded-xl p-2 shadow-md  ">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3 shadow-bottom"
        src={flags.png}
        alt="Country Flags"
      />

      <h3 className="text-lg font-semibold text-black my-1">
        Country Name: {name.common}
      </h3>
      <h4 className="text-base font-medium text-black">Capital: {capital} </h4>
      <p className="text-base font-medium text-black">
        Population: {population}
      </p>
      <p className="text-base font-medium text-black">Area: {area}</p>
      <div className="flex items-center justify-between mt-4">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-3xl text-base px-5 py-2 text-center me-2 mb-2">
          Details
        </button>

        <button
          onClick={() => handleTravel(country)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-3xl text-base px-5 py-2 text-center me-2 mb-2"
        >
          Add To Travel List
        </button>
      </div>
    </div>
  );
}
