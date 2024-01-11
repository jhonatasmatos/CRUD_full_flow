import { NextResponse } from 'next/server'

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	return NextResponse.json(
		{
			success: true,
			message: `TODO ${params}`,
		},
		{
			status: 200,
		}
	)
}

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } }
) {
	return NextResponse.json(
		{
			success: true,
			message: `TODO ${params}`,
		},
		{
			status: 200,
		}
	)
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	return new Response(null, { status: 204 })
}
