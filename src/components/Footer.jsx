import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright&#169; {year}</p>
      </footer>
    </div>
  );
};
