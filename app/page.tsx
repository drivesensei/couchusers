"use client";

import Link from "next/link";
import { useUsers } from "./lib/hooks/useUsers";
import { UserType } from "./lib/types/user-types";

export default function Home() {
  const { users, isLoading, error } = useUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading && <p>Loading...</p>}
      {error && <p>An error happened: {error.message}</p>}
      {users ? users.map(renderUser) : null}
    </main>
  );
}

const renderUser = (user: UserType) => (
  <div key={user.id} className="m-5">
    <Link href={`/user/profile/${user.id}`}>{user.name}</Link>
  </div>
);
