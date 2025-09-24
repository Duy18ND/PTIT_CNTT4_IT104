import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../store/slice/LanguageSlice";
import type { AppDispatch, RootState } from "../store/store";

export default function EXERCISE06() {
  const dispatch = useDispatch<AppDispatch>();
  const lang = useSelector((state: RootState) => state.EXE06.lang);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(toggleLanguage(event.target.value as "vi" | "en"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <select value={lang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2 style={{ marginTop: "20px" }}>
        {lang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}
      </h2>
    </div>
  );
}