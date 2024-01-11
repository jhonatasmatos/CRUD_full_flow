import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	return NextResponse.json(
		{
			success: true,
			message: 'TODO',
		},
		{
			status: 200,
		}
	)
}

export async function POST(req: Request) {
	return NextResponse.json(
		{
			success: true,
			message: 'TODO',
		},
		{
			status: 201,
		}
	)
}
