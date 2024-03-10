import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { bikeWorkshops } from "@/constants/bike-workshop"; // Ensure this path is correct
import Home from "../page";

describe("HomePage", () => {
  // Test for rendering the main heading
  it("renders the main heading", () => {
    render(<Home />);
    const mainHeading = screen.getByText("Explore Workshop Nearby");
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders workshop cards", () => {
    render(<Home />);
    // Assuming each workshop has a unique name or you want to check for the presence of a card
    bikeWorkshops.forEach((workshop) => {
      const cardNames = screen.getAllByText(workshop.name);
      // If a workshop name appears more than once, this will ensure we at least found one instance
      expect(cardNames.length).toBeGreaterThan(0);
    });
  });

  // Test for rendering buttons
  it("renders discover buttons", () => {
    render(<Home />);
    const buttons = screen.getAllByRole("button");
    // Adjust the button text if necessary
    expect(buttons[0]).toHaveTextContent("Discover all workshops nearby");
    expect(buttons[1]).toHaveTextContent("Discover newly added workshop");
  });

  // Test for checking the second heading
  it("renders the newly added workshops heading", () => {
    render(<Home />);
    const secondaryHeading = screen.getByText("Newly Added Workshops");
    expect(secondaryHeading).toBeInTheDocument();
  });
});
