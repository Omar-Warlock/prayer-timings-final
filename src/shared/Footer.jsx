import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 flex flex-col items-center justify-center opacity-40">
      <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-400">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/Omar-Warlock"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition"
        >
          Omar
        </a>{" "}
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
