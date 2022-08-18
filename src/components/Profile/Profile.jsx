import PropTypes from "prop-types";

export default function Profile({ name, imgUrl }) {
  return (
    <img
      src={imgUrl}
      alt={name}
      className="mx-auto w-24 items-center rounded-full pb-4"
    />
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
