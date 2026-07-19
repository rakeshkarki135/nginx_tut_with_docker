"use client";

import { useState } from "react";

const SumPage = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/add/${firstNumber}/${secondNumber}`);

      if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
      }

      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="h-full items-center flex justify-center">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="w-1/2 mt-60 flex flex-col gap-4"
      >
        <h1 className="text-center text-4xl font-bold text-gray-600 mb-10">
          Calculate Sum of Two Numbers
        </h1>
        <input
          type="number"
          name="firstNumber"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="Enter a Number"
          className="w-full p-3 text-gray-400 outline-green-500 outline-2 rounded-xl"
        />
        <input
          type="number"
          name="secondNumber"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Enter a Number"
          className="p-3 text-gray-400 outline-green-500 outline-2 rounded-xl"
        />

        <button
          type="submit"
          className="text-sm py-3 px-2 bg-red-400 hover:bg-red-500 rounded-xl"
        >
          Add
        </button>
        <input
          type="text"
          name="result"
          value={`The result is ${result}`}
          onChange={() => {}}
          className="p-3 text-gray-400 outline-green-500 outline-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default SumPage;
