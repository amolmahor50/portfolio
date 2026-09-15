import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useThemeSettings } from "@/hooks/useThemeSettings";
import { FONT_PRESETS, DEFAULT_FONT_PRESET } from "@/constants/fonts";
import { THEME_PRESETS, DEFAULT_THEME_PRESET } from "@/constants/theme-presets";

const ThemeContext = createContext(null);

export const AppThemeProvider = ({ children }) => {
    const { themeSettings } = useThemeSettings();

    // Resolve color preset or custom hex colors
    const primaryColor =
        themeSettings?.primaryColor ||
        THEME_PRESETS.find((p) => p.id === themeSettings?.preset)?.primary ||
        DEFAULT_THEME_PRESET.primary;

    const secondaryColor =
        themeSettings?.secondaryColor ||
        THEME_PRESETS.find((p) => p.id === themeSettings?.preset)?.secondary ||
        DEFAULT_THEME_PRESET.secondary;

    // Resolve font preset
    const activeFont = useMemo(() => {
        const presetId = themeSettings?.fontPreset;
        const fontName = themeSettings?.fontFamily;

        if (presetId) {
            const match = FONT_PRESETS.find((f) => f.id === presetId);
            if (match) return match;
        }
        if (fontName) {
            const match = FONT_PRESETS.find((f) => f.name.toLowerCase() === fontName.toLowerCase());
            if (match) return match;
        }
        return DEFAULT_FONT_PRESET;
    }, [themeSettings?.fontPreset, themeSettings?.fontFamily]);

    // Color scheme ('light', 'dark')
    const colorScheme = themeSettings?.colorScheme === "dark" ? "dark" : "light";
    const isDark = colorScheme === "dark";

    // Dynamically apply colors and font to DOM
    useEffect(() => {
        if (typeof document === "undefined") return;

        const root = document.documentElement;

        // 1. Color Scheme
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // 2. Primary & Secondary Colors
        root.style.setProperty("--primary", primaryColor);
        root.style.setProperty("--color-primary", primaryColor);
        root.style.setProperty("--ring", primaryColor);
        root.style.setProperty("--secondary", secondaryColor);
        root.style.setProperty("--color-secondary", secondaryColor);

        // 3. Dynamic Google Font injection
        if (activeFont?.googleFont) {
            let fontLink = document.getElementById("dynamic-theme-font");
            if (!fontLink) {
                fontLink = document.createElement("link");
                fontLink.id = "dynamic-theme-font";
                fontLink.rel = "stylesheet";
                document.head.appendChild(fontLink);
            }
            fontLink.href = `https://fonts.googleapis.com/css2?family=${activeFont.googleFont}&display=swap`;
        }

        // 4. Apply Font Family
        if (activeFont?.family) {
            root.style.setProperty("--font-sans", activeFont.family);
            root.style.fontFamily = activeFont.family;
            document.body.style.fontFamily = activeFont.family;
        }
    }, [primaryColor, secondaryColor, activeFont, isDark]);

    const contextValue = useMemo(
        () => ({
            primaryColor,
            secondaryColor,
            font: activeFont,
            colorScheme,
            isDark,
            themeSettings,
        }),
        [primaryColor, secondaryColor, activeFont, colorScheme, isDark, themeSettings]
    );

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useAppTheme must be used within an AppThemeProvider");
    }
    return context;
};

export default AppThemeProvider;
