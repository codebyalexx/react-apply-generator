export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={
        "inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 " +
        (className ? className : "")
      }
      {...props}
    >
      {children}
    </button>
  );
};
