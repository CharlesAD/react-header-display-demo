import PropTypes from "prop-types";

export default function Form({ setName }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const submission = Object.fromEntries(new FormData(event.target));
    setName(submission.name);

    event.target.reset();
  };

  return (
    <form className="mx-auto w-48" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          className="m-5 rounded border"
          name="name"
        />
      </div>

      <button
        type="submit"
        className="flex justify-center bg-purple-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  setName: PropTypes.func.isRequired,
};
