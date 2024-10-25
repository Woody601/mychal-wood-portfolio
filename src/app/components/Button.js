"use client";
import React from "react";
import Link from "next/link";
import "@/app/css/Button.css";

export default function Button({ href, children, onClick }) {
  if (href && onClick == null) {
    return (
      <Link href={href} className="button">
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );
  }
}
