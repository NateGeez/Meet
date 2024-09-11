import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  const event = mockData[0];

  test('displays event details when "Show Details" button is clicked', async () => {
    render(<Event event={event} />);
    const user = userEvent.setup();

    // Ensure the description is defined
    expect(event.description).toBeDefined();

    // Check that the description is not initially in the document
    expect(
      screen.queryByText((content, element) =>
        content.startsWith(event.description.slice(0, 20))
      )
    ).not.toBeInTheDocument();

    // Click the "Show Details" button
    const showDetailsButton = screen.getByText('Show Details');
    await user.click(showDetailsButton);

    // Wait for the event details to be visible using a partial text match
    const descriptionElement = await screen.findByText((content, element) =>
      content.includes('Have you wondered how you can ask Google')
    );
    expect(descriptionElement).toBeInTheDocument();

    // Test hiding details
    const hideDetailsButton = screen.getByText('Hide Details');
    await user.click(hideDetailsButton);

    // Ensure details are hidden
    await waitFor(() => {
      expect(
        screen.queryByText((content, element) =>
          content.includes('Have you wondered how you can ask Google')
        )
      ).not.toBeInTheDocument();
    });
  });
});
