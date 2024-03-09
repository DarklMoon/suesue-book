import { NextResponse } from "next/server";
import mockUser from "@/lib/mockData.json";


export async function GET() {
  return NextResponse.json({
    Test: "HelloWorld",
    AllUser: mockUser,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    POST_DATA: data
  });
}

export async function PUT(request: Request) {
  const data = await request.json();
  console.log("USER_FORM_PROFILE:", data)
  try {
    
    return NextResponse.json({
      message: "✅ Update profile success!"
    });
  } catch (error) {
    console.log(error)
    throw error;
    
  }

}
