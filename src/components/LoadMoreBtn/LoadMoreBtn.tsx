import React from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, hasMore }) => {
  return (
    <button
      className={css.buttonLoadMore}
      onClick={onClick}
      disabled={!hasMore}
    >
      {hasMore ? "Load More" : "No More Images"}
    </button>
  );
};

export default LoadMoreBtn;
