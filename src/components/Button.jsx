import React from "react";

const Button = ({ styles }) => (
  <>
    <button
      className={`rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} transition-all duration-200 ease-in-out hover:rounded-3xl`}
    >
      Get Started
    </button>
  </>
);

export default Button;
