import { Check, Trash } from 'phosphor-react'

interface Task {
	id: string
	completed: boolean
	content: string
	onChangeStatus(id: string): void
	onDeleteTask(id: string): void
}

export function Task({
	id,
	completed,
	content,
	onChangeStatus,
	onDeleteTask,
}: Task) {
	return (
		<div
			key={id}
			className='flex items-center justify-between px-4 w-[420px] h-12 rounded-sm mt-4 bg-[#BE1E2D]'
		>
			<button id='checkBtn' onClick={() => onChangeStatus(id)} className=''>
				<Check className='text-white' weight='bold' />
			</button>
			<p
				id='taskContent'
				className={`text-white ${completed ? 'line-through' : ''}`}
			>
				{content}
			</p>
			<button onClick={() => onDeleteTask(id)} type='button' title='Trash'>
				<Trash id='deleteBtn' className='text-white' size={20} weight='bold' />
			</button>
		</div>
	)
}
