import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/services/projectService";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "12");
  const cursor = searchParams.get("cursor");

  const result = await getProjects({ cursor, limit });

  return NextResponse.json(result, { status: 200 });
}
