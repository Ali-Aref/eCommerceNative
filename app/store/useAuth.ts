import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Auth = {
    authenticated: boolean;
    token: string | null;
    userId: number;
    name: string;
    role: string;
    email: string;
    status: number;
    emailVerifiedAt: string | null;
    createdAt: string;
    updatedAt: string;
    setAuth: (data: any) => void;
    // we also receive the otp here
  };

export const useAuth = create<Auth>()(
  persist(
    (set) => ({
      authenticated: false,
      token: null,
      userId: 0,
      name: "",
      role: "",
      email: "",
      status: 0,
      emailVerifiedAt: null,
      createdAt: "",
      updatedAt: "",
      setAuth: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
    }),
    { name: "auth", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
