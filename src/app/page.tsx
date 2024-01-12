'use client'

import { ClipboardText } from 'phosphor-react'
import { ChangeEvent, useMemo, useState } from 'react'
import { v4 } from 'uuid'
import { Task } from './components/Task'

interface Task {
	id: string
	completed: boolean
	content: string
}

export default function Home() {
	const [newTask, setNewTask] = useState('')
	const [tasks, setTasks] = useState<Task[]>([])

	const handleAddTask = () => {
		const addedTask = {
			id: v4(),
			completed: false,
			content: newTask,
		}

		setTasks([...tasks, addedTask])
		setNewTask('')
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTask(event?.target.value)
	}

	function handleDeleteTask(taskId: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id !== taskId
		})

		setTasks(tasksWithoutDeletedOne)
	}

	function handleChangeStatus(taskId: string) {
		const taskToEdit = tasks.find((task) => task.id === taskId)

		if (taskToEdit) {
			taskToEdit.completed = !taskToEdit.completed
		}

		const editedTasks = [...tasks]
		setTasks(editedTasks)
	}

	const tasksDone = useMemo(
		() => tasks.filter((task) => task.completed).length,
		[tasks]
	)

	return (
		<main className='flex flex-col items-center h-screen w-screen'>
			<h1 className='mt-24 text-[32px] font-bold'>TaskList APP</h1>
			<div className='flex pt-16'>
				<input
					className='w-80 h-12 rounded-md border border-[#BE1E2D] p-4'
					type='text'
					placeholder='Add a new task'
					data-testid='inputTask'
					value={newTask}
					onChange={handleNewTaskChange}
				/>
				<button
					id='addBtn'
					className='flex items-center justify-center ml-4 w-20 h-12 rounded-md bg-[#BE1E2D] text-white'
					onClick={handleAddTask}
				>
					Add+
				</button>
			</div>
			<div className='flex w-[420px] justify-between mt-16'>
				<div className='flex gap-2'>
					<p>Tarefas criadas</p>
					<span role='createdTasks' id='createdTasks' className='flex items-center justify-center'>
						{tasks.length}
					</span>
				</div>
				<div className='flex gap-2'>
					<p>Concluídas</p>
					<span role='tasksDone' id='tasksDone' className='flex items-center justify-center'>
						{tasks.length === 0 ? (
							0
						) : (
							<>
								{tasksDone} de {tasks.length}
							</>
						)}
					</span>
				</div>
			</div>
			<div>
				{tasks.length === 0 ? (
					<div className='flex flex-col items-center  mt-16 '>
						<ClipboardText className='mb-4' size={32} weight='light' />
						<strong id='noTasksText'>
							Você ainda não tem tarefas cadastradas
						</strong>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				) : (
					<>
						{tasks.map((task) => (
							<Task
								key={task.id}
								id={task.id}
								completed={task.completed}
								content={task.content}
								onChangeStatus={() => handleChangeStatus(task.id)}
								onDeleteTask={() => handleDeleteTask(task.id)}
							/>
						))}
					</>
				)}
			</div>
		</main>
	)
}
