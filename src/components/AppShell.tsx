import { Link, NavLink } from "react-router";

type AppShellProps = { children: React.ReactNode; role: "patient" | "doctor" };

function Brand() {
  return (
    <Link
      className="flex items-center gap-2 font-semibold text-slate-900"
      to="/"
    >
      <span className="grid size-8 place-items-center rounded-lg bg-cyan-600 text-lg text-white">
        +
      </span>
      Medimatch
    </Link>
  );
}

function AppShell({ children, role }: AppShellProps) {
  const items =
    role === "patient"
      ? [
          { to: "/", label: "Inicio" },
          { to: "/paciente", label: "Doctores" },
        ]
      : [
          { to: "/doctor", label: "Resumen" },
          { to: "/doctor/horarios", label: "Horarios" },
          { to: "/doctor/perfil", label: "Mi perfil" },
        ];

  return (
    <div className="min-h-svh bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
            {items.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-cyan-700" : "hover:text-slate-900"
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {role === "patient" ? (
            <div className="flex items-center gap-3">
              <Link
                className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:block"
                to="/login"
              >
                Ingresar
              </Link>
              <Link
                className="rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                to="/login?next=/paciente"
              >
                Reservar cita
              </Link>
            </div>
          ) : (
            <Link
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              to="/"
            >
              Salir
            </Link>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        {children}
      </main>
      <footer className="mx-auto max-w-7xl px-5 pb-8 text-sm text-slate-400 sm:px-8">
        © 2026 Medimatch
      </footer>
    </div>
  );
}

export default AppShell;
