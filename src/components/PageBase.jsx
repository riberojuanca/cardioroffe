import React from "react";

export function PageBase({ title, imagesrc, ...texts }) {
  return (
    <section className="flex items-center m-auto justify-center gap-8">
      <article className="lg:w-3/4 lg:px-5 px-8 flex-col lg:flex-row flex gap-8 p-8">
        <div className="">
          <img
            className="rounded-lg h-full object-cover"
            src={imagesrc}
            alt=""
          />
        </div>
        <div className="w-full">
          <h1>{title}</h1>
          {Object.values(texts).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </article>
    </section>
  );
}

export function PageBaseRight({ title, imagesrc, ...texts }) {
  return (
    <section className="flex items-center m-auto justify-center gap-8">
      <article className="lg:w-3/4 lg:px-5 px-8 flex-col lg:flex-row-reverse flex gap-8 p-8">
        <div className="">
          <img
            className="rounded-lg h-full object-cover"
            src={imagesrc}
            alt=""
          />
        </div>
        <div className="w-full lg:text-right">
          <h1 className="pb-2">{title}</h1>
          {Object.values(texts).map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
