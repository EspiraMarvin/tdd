import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
  it('should render same text passed into title prop', async() => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/My header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // it('should render header element with My Header passed as props', async() => {
  //     render(<Header title="My Header" />);
  //     const headingElement = screen.getByRole("heading");
  //     expect(headingElement).toBeInTheDocument();
  // });

  // it('should render same text passed into title prop as heading', async() => {
  //     render(<Header title="Cats" />);
  //     const headingElement = screen.getByRole("heading", {name: "Cats"});
  //     expect(headingElement).toBeInTheDocument();
  // });

  // it('should render same text passed into title prop  heading', async() => {
  //     render(<Header title="My Header" />);
  //     const headingElement = screen.getByTitle("header");
  //     expect(headingElement).toBeInTheDocument();
  // });
    

  // it('should render same text passed into title prop  heading', async() => {
  //     render(<Header title="My Header" />);
  //     const headingElement = screen.getByTestId("header-1");
  //     expect(headingElement).toBeInTheDocument();
  // });

  // FIND BY
  it('should render same text passed into title prop ', async() => {
      render(<Header title="My Header" />);
      const headingElement = await screen.findByText(/My header/i);
      expect(headingElement).toBeInTheDocument();
    });
    

    // QUERY BY
  it('dont expect to find dogs in the Header, component, we use queryBy so it doesnt throw an error when dogs is not in the element ', async() => {
      render(<Header title="My Header" />);
      const headingElement = screen.queryByText(/dogs/i);
      expect(headingElement).not.toBeInTheDocument();
    });


    // GET ALL BY
  //   it('should render same text passed into title prop', async() => {
  //     render(<Header title="My Header" />);
  //     const headingElements = screen.getAllByRole("heading");
  //     expect(headingElements.length).toBe(2);
  //   });
  
})
