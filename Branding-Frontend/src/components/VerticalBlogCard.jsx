import React from "react";

const VerticalBlogCard = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      key={data?.slug}
      className="flex transform flex-col gap-3 rounded-lg border bg-landingContainer w-[350px] h-[400px] p-3 transition-transform hover:scale-105 mb-5"
    >
      <figure className="relative h-40 w-full overflow-hidden bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full rounded-md object-cover"
          width={2070}
          height={1380}
          src={data?.cover}
          alt="Latest Blog"
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
