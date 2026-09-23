export type Doctor = {
  id: string
  name: string
  specialty: string
  location: string
  rating: string
  experience: string
  color: string
}

export const doctors: Doctor[] = [
  { id: 'valeria-ruiz', name: 'Dra. Valeria Ruiz', specialty: 'Medicina general', location: 'Miraflores, Lima', rating: '4.9', experience: '12 años de experiencia', color: 'bg-rose-100 text-rose-700' },
  { id: 'diego-castillo', name: 'Dr. Diego Castillo', specialty: 'Cardiología', location: 'San Isidro, Lima', rating: '4.8', experience: '10 años de experiencia', color: 'bg-sky-100 text-sky-700' },
  { id: 'sofia-torres', name: 'Dra. Sofía Torres', specialty: 'Dermatología', location: 'Surco, Lima', rating: '4.9', experience: '8 años de experiencia', color: 'bg-amber-100 text-amber-700' },
  { id: 'marcos-vega', name: 'Dr. Marcos Vega', specialty: 'Pediatría', location: 'Barranco, Lima', rating: '4.7', experience: '14 años de experiencia', color: 'bg-violet-100 text-violet-700' },
]

export const specialties = ['Todas', 'Medicina general', 'Cardiología', 'Dermatología', 'Pediatría']
export const slots = ['09:00 a. m.', '10:30 a. m.', '12:00 p. m.', '03:00 p. m.', '04:30 p. m.']
