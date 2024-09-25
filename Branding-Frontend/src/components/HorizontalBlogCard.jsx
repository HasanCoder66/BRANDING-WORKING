import React from "react";

const VerticalBlogCard = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div
      key={data?.slug}
      className="flex flex-col gap-3 rounded-lg border bg-[#F4F4F5] p-3 lg:flex-row"
    >
      <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full rounded-md object-cover transition-transform duration-300 hover:scale-125"
          src={data?.cover}
          alt="demo"
        />
      </figure>

      <a href={`/${data?.slug}`}>
        <h3 className="mb-2 text-xl font-bold text-gray-600 transition-colors duration-200 hover:text-blue-600">
          {data?.title}
        </h3>
        <p className="text-gray-700">{data?.shortDescription}</p>
        <p className="mt-4 text-sm font-semibold text-gray-600">
          {formatDate(data?.publishDate)} | {data?.estimatedTimeToRead}
        </p>
      </a>
    </div>
  );
};

export default VerticalBlogCard;
