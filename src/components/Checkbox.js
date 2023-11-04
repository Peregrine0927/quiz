import React from "react";

export default function Checkbox({ text, ...rest }) {
  return (
    <label>
      <input {...rest} />
      <span>{text}</span>
    </label>
  );
}
