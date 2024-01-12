import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
	it('renders a home page', () => {
		render(<Home />)

		const h1 = screen.getByText('TaskList APP')

		expect(h1).toBeInTheDocument()
	})
})
