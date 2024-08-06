import type {
  UsersResponseErrorType,
  UserType,
} from "@/app/lib/types/user-types";
import { useEffect, useState } from "react";

const USERS_ENDPOINT = "/api/users";

export function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState<UsersResponseErrorType>();

  useEffect(() => {
    setIsLoading(true);
    fetch(USERS_ENDPOINT)
      .then((j) => j.json())
      .then((data) => setUsers(data))
      .catch((e: Error) => setError({ message: e.message }))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    users,
    isLoading,
    error,
  };
}
