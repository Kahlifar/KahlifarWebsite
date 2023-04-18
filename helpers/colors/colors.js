export function getColorLightness(color) {
    // Convert color to RGB format
    const rgbColor = hexToRgb(color.replace('#', ''));

    // Calculate lightness using the formula for relative luminance
    const lightness = (0.2126 * rgbColor.r + 0.7152 * rgbColor.g + 0.0722 * rgbColor.b) / 255;

    return lightness;
}

// Helper function to convert hex color to RGB format
function hexToRgb(hex) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

