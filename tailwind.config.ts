import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black canvas with electric blue and violet as the gradient pair.
        void: {
          950: "#04060f",
          900: "#070b18",
          800: "#0c1122",
          700: "#141a30",
          600: "#1d2542"
        },
        electric: {
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7"
        },
        violet: {
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 32px -8px rgba(139, 92, 246, 0.55)",
        "glow-lg": "0 0 60px -12px rgba(56, 189, 248, 0.5)",
        panel: "0 32px 80px -32px rgba(4, 6, 15, 0.9)"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-3%, 4%, 0) scale(0.95)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        drift: "drift 24s ease-in-out infinite",
        "drift-slow": "drift 34s ease-in-out infinite reverse",
        rise: "rise 0.6s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
        blink: "blink 1.1s step-end infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
        marquee: "marquee 32s linear infinite"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
