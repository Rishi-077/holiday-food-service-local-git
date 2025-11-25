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
