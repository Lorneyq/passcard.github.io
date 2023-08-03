import { useState } from "react";

const Checkbox = ({ id, checked, onChange, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!checked);
  };

  return (
    <label className="flex items-center cursor-pointer mb-1 max-w-4/5">
      <div className="relative w-5 h-5">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          id={id}
          onClick={handleCheckboxChange}
          onChange={onChange}
        />
        <div
          className={`w-full h-full border border-black rounded absolute flex justify-center items-center  ${
            checked ? "bg-accent-color" : "bg-white"
          }`}
        >
          {checked && (
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4765 0.563159C12.7785 -0.18772 11.6472 -0.18772 10.9492 0.563159L4.63067 7.3594L3.05082 5.66011C2.3528 4.90923 1.22153 4.90923 0.523514 5.66011C-0.174505 6.41099 -0.174505 7.628 0.523514 8.37842L3.36679 11.4368C4.0648 12.1877 5.19607 12.1877 5.89409 11.4368L13.4764 3.28193C14.1745 2.53105 14.1745 1.31404 13.4765 0.563159ZM12.845 2.60212C12.845 2.60212 5.38032 10.6311 5.26262 10.7575C4.91383 11.1327 4.34799 11.1327 3.99874 10.7575C3.99874 10.7575 1.13753 7.67968 1.12877 7.66952C0.80624 7.29248 0.815436 6.70543 1.15501 6.33992C1.5038 5.96471 2.06966 5.96471 2.41889 6.33992L4.63023 8.71855L11.5811 1.24297C11.9299 0.867756 12.4957 0.867756 12.845 1.24297C13.1938 1.61818 13.1938 2.22691 12.845 2.60212Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="pl-2 text-gray-700 select-none mobile-l:text-base text-sm">
        {name}
      </span>
    </label>
  );
};

export default Checkbox;
