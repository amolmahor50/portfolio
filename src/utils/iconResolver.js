import * as LucideIcons from "lucide-react";

/**
 * Resolves Lucide icon components dynamically by name.
 * Supports exact name, camelCase, PascalCase, lowercase, and kebab-case.
 */
export const getLucideIcon = (iconName, fallback = LucideIcons.Layers) => {
    if (!iconName) return fallback;

    // Direct match (e.g. "LayoutDashboard", "Server", "Palette", "Rocket")
    if (LucideIcons[iconName]) {
        return LucideIcons[iconName];
    }

    // Normalized match (ignore case and separators)
    const cleanKey = String(iconName)
        .toLowerCase()
        .replace(/[-_\s]/g, "");
    const match = Object.keys(LucideIcons).find(
        (key) => key.toLowerCase().replace(/[-_\s]/g, "") === cleanKey
    );

    if (match && LucideIcons[match]) {
        return LucideIcons[match];
    }

    return fallback;
};

export default getLucideIcon;
