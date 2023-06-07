import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import i18n from "../i18/i18n";

interface Locale {
  languageCode: string;
  setLanguageCode: (code: string) => void;
  isRtl: boolean;
  setIsRtl: (isRtl: boolean) => void;
}

export const useLocale = create<Locale>()(
  persist(
    (set) => ({
      languageCode: "en",
      setLanguageCode: (code) =>
        set((state) => {
          // i18n.locale = code;
          return { ...state, languageCode: code };
        }),
      isRtl: false,
      setIsRtl: (isRtl) =>
        set((state) => {
          // I18nManager.allowRTL(isRtl);
          // I18nManager.forceRTL(isRtl);
          return { ...state, isRtl };
        }),
    }),
    { name: "locale", storage: createJSONStorage(() => AsyncStorage) },
  ),
);
