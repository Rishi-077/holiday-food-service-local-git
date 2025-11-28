export function keyPress(event, pattern) {
  if (!pattern.test(event.key)) {
    event.preventDefault();
  }
}

export const customLightStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid var(--gray)",
    "&:hover": {
      borderColor: "var(--gray)",
    },
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "2px",
    boxShadow: "none",
    backgroundColor: state.isDisabled ? "#fafafb" : "var(--transparent)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "var(--primary)" : "var(--white)",
    color: state.isSelected ? "var(--white)" : "var(--black)",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "black" : "black",
  }),
};

// utils/getTextColor.js
export function getTextColor(bgColor) {
  // Remove "#" if exists
  const color = bgColor.replace("#", "");

  // Extract r, g, b values
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // If luminance is low return white text, else black text
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
