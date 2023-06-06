import React from "react";

function CustomInput(props) {
  return (
    <input
      className={`focus:outline-none focus:${props.ringColor ? props.ringColor : "ring-sky-500"} focus:ring ${props.textColor ? props.textColor : "text-black"} my-6 py-2 px-4 rounded-md`}
      type={`${props.type ? props.type : "text"}`}
      placeholder={`${props.placeHolder ? props.placeHolder : "Enter text here"}`}
    />
  );
}

export default CustomInput;
