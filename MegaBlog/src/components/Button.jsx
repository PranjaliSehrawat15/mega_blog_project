export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-lg shadow font-semibold ${bgColor} ${textColor} hover:bg-blue-700 transition-colors duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
