"use client";

import { useUser } from "@/app/lib/hooks/useUser";
import Link from "next/link";

export type PageParamsType = {
  params: { id: string };
};
export default function Users(props: PageParamsType) {
  const { user, isLoading, error } = useUser(props.params.id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error happened: {error.message}</p>;

  return (
    <div>
      <Link href="/">Go back</Link>

      <ul>
        <li>{user?.name}</li>
        <li>{user?.email}</li>
      </ul>
    </div>
  );
}
