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
