import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  const event = mockData[0];

  test('renders the event title', () => {
    const EventComponent = render(<Event event={event} />);
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test('renders event show details', () => {
    const EventComponent = render(<Event event={event} />);
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });

  test("by default, the event's details should be hidden", () => {
    const EventComponent = render(<Event event={event} />);
    expect(
      EventComponent.queryByText(event.description)
    ).not.toBeInTheDocument();
  });

  test('shows the details section when the user clicks show details', async () => {
    const EventComponent = render(<Event event={event} />);
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Show Details');
    await user.click(button, 'Show Details');
    expect(
      EventComponent.container.querySelector('.details')
    ).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const EventComponent = render(<Event event={event} />);
    const user = userEvent.setup();
    const button = EventComponent.queryByText('Hide Details');
    await user.click(button, 'Hide Details');
    expect(
      EventComponent.container.querySelector('.details')
    ).not.toBeInTheDocument();
  });
});
