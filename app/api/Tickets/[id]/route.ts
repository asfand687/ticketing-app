import Ticket from "@/app/(models)/ticket";
import { NextRequest, NextResponse } from "next/server";

// Define a generic type for params
type Params<T> = {
  params: T;
};

// Define the shape of the specific params for this function
type DeleteParams = {
  id: string;
};

export async function GET<T extends DeleteParams>(req: NextRequest, { params }: Params<T>) {
 
  try {

    const { id } = params
    const ticket = await Ticket.findById(id)

    return NextResponse.json({ ticket }, { status: 200 })
  } catch (error) {
    
    console.error(error)
    return NextResponse.json({ message: "Error", error}, { status: 500 })
  }
}

export async function PUT<T extends DeleteParams>(req: NextRequest, { params }: Params<T>) {
 
  try {

    const { id } = params
    const body = await req.json()

    const ticket = await Ticket.findByIdAndUpdate(id, {
      ...body.formData
    })

    return NextResponse.json({ message: "Ticket Updated" }, { status: 201 })
  } catch (error) {
    
    console.error(error)
    return NextResponse.json({ message: "Error", error}, { status: 500 })
  }
}

export async function DELETE<T extends DeleteParams>(req: NextRequest, { params }: Params<T>) {
 
  try {

    const { id } = params
    await Ticket.findByIdAndDelete(id)

    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 })
  } catch (error) {
    
    console.error(error)
    return NextResponse.json({ message: "Error", error}, { status: 500 })
  }
}