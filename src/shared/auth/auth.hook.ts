import { useCallback, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { User, createClient } from "@supabase/supabase-js";
import { AuthProfileType } from "./auth.type";
import * as SecureStore from "expo-secure-store";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

// Adicionar valores do supabase para conectar ao banco de dados
export const supabase = createClient(
  "https://wxcqoeonsucghvgygrpd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Y3FvZW9uc3VjZ2h2Z3lncnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNjM1MjEsImV4cCI6MjAwMTYzOTUyMX0.Cw1Wve7jVyRRpWbd59vrEjH1bkdScBEnN23iw-iZemY",
  {
    auth: {
      storage: ExpoSecureStoreAdapter as any,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Centralizar função para utilizar em todos useSWR para consultar os dados da api
// RequestInfo | URL;
export const fetcher =
  (onlyData?: boolean) => (input: any, init?: RequestInit | undefined) =>
    fetch(input, init)
      .then((res) => res.json())
      .then((res) => (onlyData ? res.data : res));

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { mutate } = useSWRConfig();
  const { data: profile, isLoading: isLoadingProfile } = useSWR(
    user ? "/api/v1/profile" : null,
    fetcher(true)
  );

  useEffect(() => {
    if ((user && profile && !isLoadingProfile) || error) {
      setIsLoading(false);
    }
  }, [user, error, profile, isLoadingProfile]);

  const signin = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    setUser(data.user);
    // Navegar para página inicial
  }, []);

  const signup = useCallback(
    async (profile: Partial<AuthProfileType>, password: string) => {
      const { ok, message } = await fetcher()("/api/v1/signup", {
        method: "POST",
        body: JSON.stringify({ profile, password }),
      });
      if (!ok) throw message;

      // Navegar para página de login
    },
    []
  );

  const signout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }

    await mutate(() => true, undefined, false);
    // Navegar para página de login
    setUser(null);
  }, []);

  const loadUser = useCallback(async () => {
    // const hasAuth = Validar se a página atual necessita de autenticação (login, cadastro, recuperar senha não precisam por exemplo)
    // if (!hasAuth) {
    //   setIsLoading(false)
    //   return
    // }

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      setError(error.message);
      return;
    }

    if (data.session?.user) setUser(data.session.user);
    // else Navegar para página de login
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return {
    user,
    profile,
    error,
    isLoading,
    signin,
    signup,
    signout,
  };
};
