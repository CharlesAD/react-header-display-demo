import renderer from "react-test-renderer";
import Profile from "./Profile";

it("renders without crashing", () => {
  const rendered = renderer
    .create(<Profile name="Charles" imgUrl="someImage.jpg" />)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});
