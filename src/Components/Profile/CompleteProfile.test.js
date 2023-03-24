import { render, screen } from "@testing-library/react";
import DisplayExpense from "../Expense/DisplayExpense";
import ExpenseList from "../Expense/ExpenseList";
import CompleteProfile from "./CompleteProfile";
import { Profile } from "./Profile";

describe("Profile Component", () => {
  test("renders full name", () => {
    render(<CompleteProfile />);
    const linkElement = screen.getByText(/Full Name :/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders profile URL", () => {
    //Arrange
    render(<CompleteProfile />);
    //Act notning here

    //Assert
    const labelElement = screen.getByText("Profile Photo URL", {
      exact: false,
    });
    expect(labelElement).toBeInTheDocument();
  });
  test("renders 'change password'", () => {
    render(<Profile />);
    const headingElement = screen.getByText("Change password");
    expect(headingElement).toBeInTheDocument();
  });
  test("renders 'Submit'", () => {
    render(<Profile />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
  });
  test("renders list of expenses", async () => {
    render(<DisplayExpense />);
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).toHaveLength(1);
  });
});
