import Home from '@/app/page'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Home', () => {
	it('renders a home page', () => {
		render(<Home />)

		const h1 = screen.getByText('TaskList APP')

		expect(h1).toBeInTheDocument()
	})

	it('Add a new tasks', () => {
		render(<Home />)

		const inputTask = screen.getByPlaceholderText('Add a new task')
		const addBtn = screen.getByText('Add+')

		const value = 'new task to do today'
		fireEvent.change(inputTask, {
			target: {
				value
			}
		})

		fireEvent.click(addBtn)

		const createdTasksCount = screen.getByRole('createdTasks')
		expect(createdTasksCount.textContent).toBe('1')
	})


	test('Delete a task', () => {
		render(<Home />);

		const inputTask = screen.getByTestId('inputTask')
		const addBtn = screen.getByText('Add+')

		const value = 'task to delete'
		fireEvent.change(inputTask, {
			target: {
				value
			}
		})

		fireEvent.click(addBtn)

		const deleteBtn = screen.getByRole('deleteBtn')
		fireEvent.click(deleteBtn);

		const createdTasksCount = screen.getByRole('createdTasks')

		expect(createdTasksCount.textContent).toBe('0')
	})

	test('Altera o status de uma tarefa', () => {
		render(<Home />);

		const inputTask = screen.getByTestId('inputTask');
		const addBtn = screen.getByText('Add+');

		const value = 'task to update'
		fireEvent.change(inputTask, {
			target: {
				value
			}
		});
		fireEvent.click(addBtn);

		const statusCheckbox = screen.getByRole('checkBtn');
		fireEvent.click(statusCheckbox);

		const tasksDoneCount = screen.getByRole('tasksDone');

		expect(tasksDoneCount.textContent).toBe('1 de 1');
	})
})
