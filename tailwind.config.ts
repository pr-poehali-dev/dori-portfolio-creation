import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        dori: {
          pink: {
            light: "#FFB6C1",
            DEFAULT: "#FF69B4",
            dark: "#C71585",
          },
          green: {
            light: "#98FB98",
            DEFAULT: "#32CD32",
            dark: "#228B22",
          },
          cream: "#FFF8DC",
          paper: "#FFFAF0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1) rotate(180deg)", opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "scale(1.5) rotate(180deg)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0", transform: "rotate(0deg)" },
          "100%": { backgroundPosition: "200% 0", transform: "rotate(360deg)" },
        },
        musicBounce: {
          "0%, 100%": {
            transform: "scaleY(0.3)",
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            transform: "scaleY(1)",
            filter: "hue-rotate(90deg)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        sparkle: "sparkle 2s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "bounce-slow": "musicBounce 2s infinite",
        pulse: "pulse 2s ease-in-out infinite",
      },
      boxShadow: {
        paper:
          "0 8px 32px rgba(255, 105, 180, 0.2), 0 4px 16px rgba(50, 205, 50, 0.1), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
        "paper-hover":
          "0 16px 64px rgba(255, 105, 180, 0.3), 0 8px 32px rgba(50, 205, 50, 0.2), inset 0 3px 0 rgba(255, 255, 255, 0.4)",
        glow: "0 0 20px rgba(255, 105, 180, 0.5), 0 0 40px rgba(50, 205, 50, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
