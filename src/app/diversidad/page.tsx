export const metadata = {
  title: 'Diversidad Antioqueña',
  description: 'Descubre la diversidad cultural que hace única a Antioquia.',
}

export default function Diversidad() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-emerald-800">Diversidad Antioqueña</h2>
      <p className="text-lg text-emerald-700">
        Antioquia es un mosaico de culturas, lenguas, etnias y tradiciones. Aprende sobre las comunidades que enriquecen nuestra identidad regional.
      </p>

      <div className="mt-6 space-y-4">
        <h3 className="text-2xl font-semibold text-emerald-800">Población Afrodescendiente</h3>
        <p>Presente en zonas como Urabá (Turbo, Apartadó) y el Bajo Cauca (Caucasia), representa el 10% de la población del departamento.</p>
        <p>Participación activa en festivales como el Petronio Álvarez, y celebraciones del Día de la Afrocolombianidad (21 de mayo) con talleres, tambores y gastronomía típica.</p>

        <h3 className="text-2xl font-semibold text-emerald-800">Comunidades Indígenas</h3>
        <p>Antioquia alberga comunidades Emberá (Dabeiba, Frontino), Guna Dule (Necoclí) y Zenú (Bajo Cauca). Son representadas por la Organización Indígena de Antioquia (OIA).</p>

        <h3 className="text-2xl font-semibold text-emerald-800">Comunidad LGBTQ+</h3>
        <p>Se expresan a través de eventos como la Marcha de la Diversidad en Medellín (junio) y el festival Cine Diverse (octubre). Existen guías como Medellín Gay con más recursos y eventos.</p>
      </div>
    </div>
  )
}
