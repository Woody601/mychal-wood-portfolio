export default function Icon({ type, icon }) {
  if (type == "fa4") {
    const iconClass = `fa fa-${icon}`; // Concatenate the icon class name
    return <i className={iconClass} />;
  }
  if (type.includes("google")) {
    const iconClass = type.includes("outlined")
      ? "material-symbols-outlined"
      : "material-icons";
    return <i className={iconClass}>{icon}</i>;
  }
}
