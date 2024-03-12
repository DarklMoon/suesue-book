import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    POST_DATA: data,
  });
}

export async function PUT(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    PUT_DATA: data,
  });
}

export async function GET(request: Request) {
//   const data = await request.json();
  return NextResponse.json({
    GET_DATA: request,
  });
}

export async function DELETE(request: Request) {
  //   const data = await request.json();
  return NextResponse.json({
    DELETE_DATA: request,
  });
}