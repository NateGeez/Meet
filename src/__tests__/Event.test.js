import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  const event = mockData[0];

  test('displays event details when "Show Details" button is clicked', async () => {
    render(<Event event={event} />);
    const user = userEvent.setup();
    const showDetailsButton = screen.getByText('Show Details');
    await user.click(showDetailsButton);

    // Wait for the event details to be visible
    await waitFor(() => {
      expect(screen.queryByText(event.description)).toBeInTheDocument();
    });

    // Optionally, you can also test hiding details
    const hideDetailsButton = screen.getByText('Hide Details');
    await user.click(hideDetailsButton);

    // Ensure details are hidden
    await waitFor(() => {
      expect(screen.queryByText(event.description)).not.toBeInTheDocument();
    });
  });
});
