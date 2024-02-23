import { useId } from "react";

export const Select = ({ children, options, value, onChange, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {" "}
        {children}{" "}
      </label>

      <select
        name={id}
        id={id}
        className="mt-1.5 p-2 w-full rounded-lg bg-black border-gray-400 text-gray-300 sm:text-sm cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
