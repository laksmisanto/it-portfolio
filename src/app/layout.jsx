"use client";
import "./globals.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./page";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </body>
    </html>
  );
}
