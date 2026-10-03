import { SeatMap, type SeatData } from "@/components/seat-map";
import type { SeatStatus } from "@/lib/seat-status";

/**
 * SECTION B ONLY - hardcoded seats, no database yet.
 * Section C replaces this file with the real showtime list.
 */
const BOOKED = new Set(["D4", "D5", "B2", "F7"]);

const demoSeats: SeatData[] = ["A", "B", "C", "D", "E", "F"].flatMap((row) =>
  Array.from({ length: 8 }, (_, index): SeatData => {
    const number = index + 1;
    const status: SeatStatus = BOOKED.has(`${row}${number}`)
      ? "booked"
      : "available";
    return { id: `${row}${number}`, row, number, status };
  }),
);

export default function Home() {
  return (
    <>
      <h1>Interstellar Re-Release</h1>
      <p className="muted">
        7:30 PM &middot; Screen 3 &middot; static demo data
      </p>
      <SeatMap seats={demoSeats} />
    </>
  );
}
