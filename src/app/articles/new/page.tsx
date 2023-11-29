import React from "react";

const CreateBlogPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="mb-4 text-2xl font-bold">ブログ新規作成</h2>
      <form className="bg-slate-200 p-6 shadow-lg rounded">
        <div className="mb-4">
          <label className="text-gray-700 mb-2 text-sm font-bold">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 text-sm font-bold">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 text-sm font-bold">本文</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-orange-300 border rounded"
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
