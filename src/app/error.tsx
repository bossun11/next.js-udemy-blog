"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="mt-4 bg-red-100 border-1-4 border-red-500 text-red-700 shadow-md rounded max-w-md mx-auto">
      <h3 className="mb-2 font-bold">エラーが発生しました。</h3>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
        onClick={() => reset()}
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
