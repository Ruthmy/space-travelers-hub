import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

// Helper function to wrap the component in BrowserRouter for testing NavLink
const renderWithRouter = (component) => render(<HashRouter>{component}</HashRouter>);

describe('Navbar component', () => {
  test('Renders logo and title', () => {
    render(<HashRouter><Navbar /></HashRouter>);
    const logo = screen.getByAltText('Space Travelers Logo');
    const title = screen.getByText("Space Travelers' Hub");
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Renders all navigation links', () => {
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
    const missionsLink = screen.getByRole('link', { name: /Missions/i });
    const profileLink = screen.getByRole('link', { name: /My Profile/i });
    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  test('navigation links have the correct href attribute', () => {
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
    const missionsLink = screen.getByRole('link', { name: /Missions/i });
    const profileLink = screen.getByRole('link', { name: /My Profile/i });
    expect(rocketsLink.getAttribute('href')).toBe('#/');
    expect(missionsLink.getAttribute('href')).toBe('#/missions');
    expect(profileLink.getAttribute('href')).toBe('#/profile');
  });

  test('Navigation links have correct text decoration, only Rocket link is active', () => {
    // Simulate NavLink being active
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
    const missionsLink = screen.getByRole('link', { name: /Missions/i });
    const profileLink = screen.getByRole('link', { name: /My Profile/i });

    expect(rocketsLink).toHaveStyle({ textDecoration: 'underline' });
    expect(missionsLink).toHaveStyle({ textDecoration: 'none' });
    expect(profileLink).toHaveStyle({ textDecoration: 'none' });
  });

  test('Navigation links have no text decoration when not active', () => {
    // Simulate NavLink not being active
    renderWithRouter(<Navbar />);
    const rocketsLink = screen.getByRole('link', { name: /Rockets/i });
    const missionsLink = screen.getByRole('link', { name: /Missions/i });
    const profileLink = screen.getByRole('link', { name: /My Profile/i });

    expect(rocketsLink).toHaveStyle({ textDecoration: 'underline' });
    expect(missionsLink).toHaveStyle({ textDecoration: 'none' });
    expect(profileLink).toHaveStyle({ textDecoration: 'none' });
  });
});
