import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "..";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button />);
  });

  it("should display a text", () => {
    // Act
    render(<Button>Log In</Button>);

    // Assert
    expect(screen.getByText("Log In")).toBeInTheDocument();
  });

  it("should trigger the onClick function", () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    const { getByText } = render(<Button onClick={onClick}>Log In</Button>);
    const button = getByText("Log In");
    fireEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalled();
  });
});
