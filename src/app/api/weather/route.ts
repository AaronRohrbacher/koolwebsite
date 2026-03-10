import { NextRequest, NextResponse } from "next/server";
import { fetchWeather } from "@/lib/weather";

export async function POST(request: NextRequest) {
  const { city } = await request.json();

  if (!city) {
    return NextResponse.json(
      { error: "City parameter is required" },
      { status: 400 }
    );
  }

  const data = await fetchWeather(city);
  return NextResponse.json(data);
}
