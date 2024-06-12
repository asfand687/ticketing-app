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