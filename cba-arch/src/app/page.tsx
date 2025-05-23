"use client";

import { CBAButton } from "@/components";
import { useGetAllUsers } from "@/lib";

export default function Home() {
  const { data } = useGetAllUsers();
  console.log(data);

  return (
    <div className="p-10">
      <CBAButton variant="outline" size="lg">
        Click Me!
      </CBAButton>
    </div>
  );
}
