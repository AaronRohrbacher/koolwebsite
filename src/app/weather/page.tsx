"use client";

import { useState } from "react";
import { WeatherData } from "@/types/weather";
import { getWeatherEmoji } from "@/lib/weather";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch() {
    setLoading(true);
    setError(null);

    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else {
      setWeather(data);
    }

    setLoading(false);
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-fuchsia-500/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15)_0%,_transparent_70%)]" />

      <main className="relative z-10 flex w-full max-w-md flex-col items-center gap-8 px-6 text-center">
        <a
          href="/"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          &larr; Back home
        </a>

        <h1 className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Weather Lookup
        </h1>

        <p className="text-zinc-400">
          Enter a city to get the current weather.
        </p>

        <div className="flex w-full gap-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="e.g. Austin"
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-600 backdrop-blur-sm transition-colors focus:border-fuchsia-500/50 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={loading || !city.trim()}
            className="rounded-lg bg-fuchsia-600 px-6 py-3 font-medium transition-all hover:bg-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>

        {error && (
          <div className="w-full rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
            {error}
          </div>
        )}

        {weather && !error && (
          <div className="w-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-4xl">
              {getWeatherEmoji(weather.description)}
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{weather.location}</h2>
            <p className="text-sm capitalize text-zinc-400">
              {weather.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-left">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm text-zinc-500">Temperature</div>
                <div className="text-xl font-semibold">
                  {weather.temperature}°F
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm text-zinc-500">Feels Like</div>
                <div className="text-xl font-semibold">
                  {weather.feelsLike}°F
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm text-zinc-500">Humidity</div>
                <div className="text-xl font-semibold">{weather.humidity}%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm text-zinc-500">Wind Speed</div>
                <div className="text-xl font-semibold">
                  {weather.windSpeed} mph
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="absolute bottom-8 text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Aaron&apos;s Kool Website
      </footer>
    </div>
  );
}
