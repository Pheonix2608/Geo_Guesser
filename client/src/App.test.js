import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@react-google-maps/api', () => ({
  useJsApiLoader: () => ({ isLoaded: true }),
  GoogleMap: ({ children }) => <div>{children}</div>,
  Marker: ({ position }) => <div data-testid="marker" lat={position.lat} lng={position.lng} />,
  StreetViewPanorama: () => <div>Street View Panorama</div>,
  LoadScript: ({ children }) => <div>{children}</div>,
}));

test('renders GeoGuesser header', () => {
  render(<App />);
  const linkElement = screen.getByText(/GeoGuesser/i);
  expect(linkElement).toBeInTheDocument();
});
