import React, { memo, useCallback, useState } from "react";

const Card = memo(
  ({ imageUrl, title, children, buttonText, onButtonClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);

    return (
      <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        {imageUrl && (
          <img
            alt={title}
            src={imageUrl}
            onLoad={handleImageLoad}
            loading="lazy"
            decoding="async"
            className={`h-40 w-full object-cover ${
              !imageLoaded ? "loading" : ""
            }`}
          />
        )}

        <div className="bg-white p-4 sm:p-6">
          {title && <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>}

          {children && (
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {children}
            </p>
          )}

          {buttonText && (
            <button
              type="button"
              onClick={onButtonClick}
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer"
            >
              {buttonText}
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </button>
          )}
        </div>
      </article>
    );
  }
);

export default Card;
