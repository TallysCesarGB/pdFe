import React from "react";

type PropsButton = {
  label: string;
};

export const Button = ({ label }: PropsButton) => {
  return <button>{label}</button>;
};
