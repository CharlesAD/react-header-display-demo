import PropTypes from "prop-types";

export default function Button({ changeHandler, txt, bgColor }) {
  return (
    <button
      type="button"
      onClick={changeHandler}
      className={`bg- ${bgColor} -500 rounded text-white`}
    >
      {txt}
    </button>
  );
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  txt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  bgColor: "green",
};
