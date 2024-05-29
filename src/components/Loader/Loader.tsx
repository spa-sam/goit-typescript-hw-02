import React from "react";
import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ThreeDots color="#3f51b5" height={80} width={80} />
    </div>
  );
};

export default Loader;
