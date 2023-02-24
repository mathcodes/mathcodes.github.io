import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// This runs before each test. This is good instead of having the component render in each test case
const setup = () => render(<AppBanner />);

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();
	// We expect that the title 'Hi, I am Jon' is in the banner component
	expect(screen.getByText(/Hi, I am Jon/i)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const downloadCV = screen.getByText(/Download CV/i);

	expect(downloadCV).toBeInTheDocument();

	const downloadCVButton = downloadCV.parentElement.parentElement;

	expect(downloadCVButton).toBeInTheDocument();

	await user.click(downloadCVButton);

	// const downloadLink = {
	// 	click: await user.click(downloadCVButton),
	// };
	// jest.spyOn(document, 'createElement').mockImplementation(
	// 	() => downloadLink
	// );

	// expect(downloadLink.download).toEqual('Jon-Resume.pdf');
	// expect(downloadLink.href).toEqual('/files/Jon-Resume.pdf');
	// expect(downloadLink.click).toHaveBeenCalledTimes(1);
});

test('can toggle dark mode when clicked on dark mode button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const darkMode = screen.getByText(/Dark Mode/i);

	expect(darkMode).toBeInTheDocument();

	const darkModeButton = darkMode.parentElement.parentElement;

	expect(darkModeButton).toBeInTheDocument();

	await user.click(darkModeButton);

	expect(darkModeButton).toHaveClass('bg-primary-light');
});

test('can toggle light mode when clicked on light mode button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const lightMode = screen.getByText(/Light Mode/i);

	expect(lightMode).toBeInTheDocument();

	const lightModeButton = lightMode.parentElement.parentElement;

	expect(lightModeButton).toBeInTheDocument();

	await user.click(lightModeButton);

	expect(lightModeButton).toHaveClass('bg-primary-dark');
});



