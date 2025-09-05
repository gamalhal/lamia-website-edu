 import { NavLink } from "react-router-dom";


 
function Header() {
  return (
    <header className="bg-white shadow flex flex-col items-center py-6 mb-6 rounded-2xl">
      <img
        src="/src/assets/logo.png"
        alt="شعار الموقع"
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "12px",
          border: "3px solid #2563eb",
          boxShadow: "0 2px 12px rgba(30,64,175,0.10)",
        }}
      />
      <nav className="flex gap-4 mt-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "text-lg px-5 py-2 rounded-full font-bold transition-all duration-200 " +
            (isActive
              ? "bg-blue-700 text-white shadow"
              : "text-blue-700 hover:bg-blue-50 hover:text-blue-900")
          }
        >
          الرئيسية
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            "text-lg px-5 py-2 rounded-full font-bold transition-all duration-200 " +
            (isActive
              ? "bg-blue-700 text-white shadow"
              : "text-blue-700 hover:bg-blue-50 hover:text-blue-900")
          }
        >
          من أنا
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            "text-lg px-5 py-2 rounded-full font-bold transition-all duration-200 " +
            (isActive
              ? "bg-blue-700 text-white shadow"
              : "text-blue-700 hover:bg-blue-50 hover:text-blue-900")
          }
        >
          الكورسات
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            "text-lg px-5 py-2 rounded-full font-bold transition-all duration-200 " +
            (isActive
              ? "bg-blue-700 text-white shadow"
              : "text-blue-700 hover:bg-blue-50 hover:text-blue-900")
          }
        >
          تواصل
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;