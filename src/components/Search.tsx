"use client";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/?search=${searchTerm}`);
  };
  return (
    <div className="flex gap-2">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search characters..."
        className=" p-2 border border-gray-300 rounded bg-black/40 shadow"
      />

      <button
        onClick={handleSearch}
        className="p-4 bg-black text-white rounded-full flex items-center gap-2 cursor-pointer"
      >
        <IconSearch size={20} />
      </button>
    </div>
  );
}
