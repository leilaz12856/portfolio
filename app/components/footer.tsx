import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-auto grid place-items-center py-8 text-muted text-center">
      <Image src="img/test-img.png" alt="Footer image" />
      <p>© 2025 Leila Zaifie · Portfolio</p>
    </footer>
  );
}
