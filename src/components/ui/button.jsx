
export default function Button({ variant = "default", children, className = "", ...props }) {
  // Variantes básicas
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-800",
    hero: "bg-gradient-to-r from-blue-500 to-green-500 text-white hover:scale-105",
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition disabled:opacity-50 disabled:pointer-events-none";

  const classes = `${baseClasses} ${variants[variant] || variants.default} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
