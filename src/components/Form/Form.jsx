export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const submission = Object.fromEntries(new FormData(event.target));
    console.log(submission);
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
