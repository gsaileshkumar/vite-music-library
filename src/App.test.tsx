import "cross-fetch/polyfill";
import { waitFor, cleanup, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import Home from "./views/Home";
import { server } from "./mocks/api/server";
import matchers from "@testing-library/jest-dom/matchers";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("App", async () => {
  test("App should load with 10 top artists", async () => {
    const { getByText } = renderWithProviders(<Home />);
    const totalRecords = await screen.findAllByRole("listitem");

    await waitFor(() => {
      expect(totalRecords).toHaveLength(10);
      expect(getByText("The Weeknd")).toBeInTheDocument();
    });
  });
});
