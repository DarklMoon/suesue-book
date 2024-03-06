import { NextResponse } from "next/server";
import mockUser from "@/lib/mockData.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = mockUser.filter((x) => params.userId === x.user_id.toString());

  return NextResponse.json({
    user,
  });
}
