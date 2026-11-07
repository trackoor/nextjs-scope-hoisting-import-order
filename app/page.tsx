import "../lib/main";

export default function Home() {
  return <p>order: {(globalThis as any).__order.join(" ")}</p>;
}
