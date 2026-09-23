import { Link } from 'react-router'
import AppShell from '../components/AppShell'

function ConfirmationPage() {
  return <AppShell role="patient"><section className="mx-auto max-w-xl rounded-3xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-slate-200 sm:px-12"><div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-600">✓</div><p className="mt-7 text-sm font-semibold text-emerald-700">CITA CONFIRMADA</p><h1 className="mt-2 text-3xl font-semibold text-slate-900">Tu cita ha sido agendada</h1><p className="mt-4 leading-7 text-slate-600">Te esperamos el lunes 21 de septiembre a las 09:00 a. m. con la Dra. Valeria Ruiz.</p><div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left text-sm"><p className="font-semibold text-slate-900">Datos de la cita</p><p className="mt-3 text-slate-600">Medicina general · Consultorio Miraflores</p><p className="mt-1 text-slate-600">Lunes 21 de septiembre · 09:00 a. m.</p></div><Link className="mt-8 block rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white hover:bg-cyan-700" to="/paciente">Volver a inicio</Link></section></AppShell>
}
export default ConfirmationPage
