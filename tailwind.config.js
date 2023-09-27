module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    my_input:
      "border-blue-gray-200 text-blue-gray-700\n" +
      "                placeholder-shown:border-blue-gray-200\n" +
      "                placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50",
    my_label:
      "before:content[' '] after:content[' ']\n" +
      "                            text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200\n" +
      "                            peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500",
    my_button: (props) => ({
      backgroundColor: props.isChecked ? "#4A90E2" : "#CCCCCC",
      color: props.isChecked ? "#FFFFFF" : "#333333",
      padding: "0.5rem 1rem",
      borderRadius: "0.25rem",
      "&:hover": {
        backgroundColor: props.isChecked ? "#357ABD" : "#999999",
      },
    }),
  },
};
