import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Book a Solar Consultation | HEA",
  description:
    "Fill in a few details and upload your electricity bill — we'll download your usage data from Powercor and design the perfect solar and battery system for your home.",
};

export default function BookPage() {
  return (
    <>
      <Nav />
      {/* Gold accent stripe + full-viewport intake form */}
      <div
        className="w-full bg-heffgray2 border-t-4 border-heffdark"
        style={{ marginTop: "80px", height: "calc(100vh - 80px)", overflow: "hidden" }}
      >
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-gradient-to-br from-heffblack via-slate-800 to-heffdark opacity-5 pointer-events-none"
            aria-hidden="true"
          />
          <iframe
            src="https://script.google.com/macros/s/AKfycbwYbZHXmEguJJFmGT0hd94M5heR8TUJFVConEBwcEI5x-DTgLUibdN5dlLp-VKr5tQ/exec"
            title="Book a Solar Consultation"
            allow="fullscreen"
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </div>
      </div>
    </>
  );
}
