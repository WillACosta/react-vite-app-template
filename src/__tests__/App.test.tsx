import { render, screen } from '@testing-library/react'
import App from '../App'

test('should renders the app and find count button', () => {
	render(<App />)
	const linkElement = screen.getByTestId('count-button')
	expect(linkElement).toBeInTheDocument()
})
