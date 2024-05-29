import React from "react";
import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.buttonLoadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
