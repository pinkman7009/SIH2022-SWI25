import React from "react";

export const PrimaryButton = ({ text, handleClick, size }) => {
  return (
    <button
      className={` transition-all ease-in p-2 ${
        size === "small" ? "w-20" : size === "large" ? "w-64" : "w-32"
      } text-white my-3 text-sm rounded font-bold bg-primary hover:opacity-80`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

// export const DashedButton = ({ text, handleClick, size }) => {
//   return (
//     <button
//       className={`transition-all ease-in p-2 ${
//         size === "small" ? "w-20" : size === "large" ? "w-64" : "w-32"
//       } text-primary my-3 text-sm rounded font-bold border-dashed border-2 border-primary hover:bg-primary hover:text-white`}
//       onClick={handleClick}
//     >
//       {text}
//     </button>
//   );
// };
