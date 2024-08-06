import { useEffect, useState } from "react";

import type {
  UsersResponseErrorType,
  UserType,
} from "@/app/lib/types/user-types";

const USERS_ENDPOINT = "/api/user/?id=";

export function useUser(id: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserType>();
  const [error, setError] = useState<UsersResponseErrorType>();

  useEffect(() => {
    setIsLoading(true);
    fetch(USERS_ENDPOINT + id)
      .then((j) => j.json())
      .then((data) => setUser(data))
      .catch((e: Error) => setError({ message: e.message }))
      .finally(() => setIsLoading(false));
  }, [id]);

  return {
    user,
    isLoading,
    error,
  };
}
