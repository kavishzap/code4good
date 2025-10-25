"use client";
import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  // Optional: override the deadline or label if needed
  deadline?: string; // ISO string, e.g. "2025-11-01T23:59:59+04:00"
  label?: string;    // e.g. "Submission deadline in:"
};

function Countdown({
  deadline = "2025-11-01T23:59:59+04:00",
  label = "Submission deadline in:",
}: CountdownProps) {
  const target = useMemo(() => new Date(deadline).getTime(), [deadline]);

  const calc = () => {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc());

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!timeLeft) {
    return (
      <div className="mt-4 text-center">
        <span className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
          Submissions closed
        </span>
      </div>
    );
  }

  return (
    <div className="mt-4 text-center text-lg font-semibold text-primary">
      {label}{" "}
      <span className="font-bold tabular-nums">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
    </div>
  );
}

export default Countdown;
