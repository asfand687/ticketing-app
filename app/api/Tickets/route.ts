import Ticket from "@/app/(models)/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  try {

    const body = await req.json()
    const ticketData = body.formData
    await Ticket.create(ticketData)
    return NextResponse.json({message: "Ticket Created"}, { status: 201 })
    
  } catch (error) {
    
    console.error(error)
    return NextResponse.json({message: "Error", error}, { status: 500 })
  }
}

export async function GET(req: NextRequest) {

  try {

    const tickets = await Ticket.find({})
    return NextResponse.json({ tickets }, { status: 201 })
    
  } catch (error) {

    console.error(error)
    return NextResponse.json({message: "Error", error}, { status: 500 })
  }
} 