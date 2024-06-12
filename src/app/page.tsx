"use client";
import { useState } from "react";
import Header from "./components/Header";
import Link from "next/link";
export default function Home() {
    const [index, setindex] = useState(0);
    return (
        <main className="flex flex-col min-h-screen bg-white w-screen overflow-x-hidden">
            <Header />
	</main>
    );
}
