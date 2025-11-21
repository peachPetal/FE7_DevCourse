"use client";
import Image from "next/image";
import { useState } from "react";

export default function MovieImage({
  poster_path,
  title,
}: {
  poster_path: string;
  title: string;
}) {
  const [isError, setIsError] = useState(false);
  const handleError = () => setIsError(true);
  return (
    <>
      {!isError && (
        <Image
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          fill
          sizes="300"
          loading="eager"
          onError={handleError}
        />
      )}
      {isError && (
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAA3NCSVQICAjb4U/gAAAAg0lEQVR4nO3BMQEAAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8C1FIAAGs7t8sAAAAASUVORK5CYII="
          alt="placeholder"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          width={300}
          height={0}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
            background: "#ccc",
          }}
        />
      )}
    </>
  );
}
