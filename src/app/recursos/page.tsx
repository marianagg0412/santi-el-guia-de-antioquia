export default function Recursos() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-emerald-800">Recursos para fomentar la diversidad antioqueña</h2>
      <p className="text-lg text-emerald-700">
        Explora información clave para entender y promover la diversidad cultural, étnica y social en Antioquia.
      </p>

      <ul className="space-y-4">
        <li>
          <h3 className="text-xl font-semibold text-emerald-700">📄 Plan de Desarrollo Antioquia 2024–2027</h3>
          <p className="text-emerald-600">Documento oficial con políticas públicas y acciones estratégicas para el desarrollo inclusivo del departamento.</p>
          <a
            href="https://www.antioquia.gov.co/images/plan%20de%20Desarrollo/15082024%20Plan%20de%20Desarrollo%20Por%20Antioquia%20Firme%202024-2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 underline"
          >
            Leer el Plan (PDF)
          </a>
        </li>

        <li>
          <h3 className="text-xl font-semibold text-emerald-700">🌐 CulturAntioquia</h3>
          <p className="text-emerald-600">Plataforma oficial de la Secretaría de Cultura de Antioquia con programas y eventos culturales.</p>
          <a
            href="https://culturantioquia.gov.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 underline"
          >
            Visitar culturantioquia.gov.co
          </a>
        </li>

        <li>
          <h3 className="text-xl font-semibold text-emerald-700">📚 Repositorio Digital de Antioquia</h3>
          <p className="text-emerald-600">Acceso a documentos históricos, investigaciones académicas y recursos sobre diversidad en Antioquia.</p>
          <a
            href="https://hdl.handle.net/10495/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 underline"
          >
            Ver Repositorio
          </a>
        </li>

        <li>
          <h3 className="text-xl font-semibold text-emerald-700">📆 Agenda Cultural – Biblioteca Pública Piloto</h3>
          <p className="text-emerald-600">Consulta eventos multiculturales, exposiciones y talleres de inclusión.</p>
          <a
            href="https://www.bibliotecapiloto.gov.co/agenda-cultural/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 underline"
          >
            Ver Agenda Cultural
          </a>
        </li>
      </ul>
    </div>
  )
}
