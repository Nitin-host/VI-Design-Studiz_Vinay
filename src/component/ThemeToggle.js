import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "../styles/themeToggle.module.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {theme === "light" ? (
        <Sun
          className={`${styles.themeIcon} ${styles.lightIcon}`}
          onClick={toggleTheme}
        />
      ) : (
        <Moon
          className={`${styles.themeIcon} ${styles.darkIcon}`}
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}
