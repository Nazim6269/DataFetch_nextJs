"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  };
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3 focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <button
              className="shadow w-full bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Predict
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs font-semibold">
          &copy;2024 NazimUddin All rights reserved.
        </p>
      </div>
    </main>
  );
}
