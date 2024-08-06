import type { UserType } from "@/app/lib/types/user-types";
import { NextResponse, NextRequest } from "next/server";
import { usersMock } from "@/app/lib/mocks/user-mocks";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const id = params.get("id");

  const user: UserType | undefined = usersMock.find((user) => user.id === id);

  if (!user) {
    return NextResponse.json("NOT_FOUND", {
      status: 400,
    });
  }

  return NextResponse.json(user);
}
