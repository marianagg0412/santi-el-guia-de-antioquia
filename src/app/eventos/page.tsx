'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Eventos() {
  const [hovered, setHovered] = useState<number | null>(null);

  const eventos = [
    {
      id: 1,
      nombre: '📖 Hay Festival Medellín',
      fecha: '24 de enero al 3 de febrero',
      descripcion: 'Festival literario y cultural con la participación de más de 190 invitados de 28 países.',
      enlace: 'https://elpais.com/america-colombia/2024-11-19/el-hay-festival-se-prepara-para-celebrar-su-vigesima-edicion-en-colombia.html',
      imagen: 'https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/events/15749/hay_festival_medellin.jpg',
    },
    {
      id: 15,
      nombre: '🎭 Festival de Teatro de Marinilla',
      fecha: 'Marzo',
      descripcion: 'Festival que reúne a compañías teatrales locales y nacionales, promoviendo el arte escénico en el oriente antioqueño.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://orientese.co/wp-content/uploads/2022/10/Festival-de-Teatro-Infantil-en-Marinilla-2022-1140x570.jpg',
    },
    {
      id: 14,
      nombre: '🏞 Samaná Fest',
      fecha: '22 al 30 de marzo',
      descripcion: 'Combina deportes extremos con la conservación ambiental, incluyendo el primer Campeonato Mundial de Kayak en Colombia.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://elfiltro.co/wp-content/uploads/2025/02/samana-fest-2025-campeonato-mundial-kayak.jpg',
    },
    {
      id: 13,
      nombre: '🌊 Fiestas del Río',
      fecha: '21 al 24 de marzo',
      descripcion: 'Actividades culturales, deportivas, una feria campesina y del emprendimiento, además de una carrera de motovelocidad.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/events/5081/fiestas_rio01.jpg',
    },
    {
      id: 12,
      nombre: '🎭 Festival de Teatro Carmentea',
      fecha: '23 al 29 de marzo',
      descripcion: 'Más de 30 eventos en siete escenarios del municipio y una jornada artística en la vereda Betania.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdgBxQlqCbfSB57a3eiq27ytdmm_6U1VpFg&s',
    },
    {
      id: 2,
      nombre: '🎤 Festival Nacional de la Trova',
      fecha: '21 de mayo al 20 de julio',
      descripcion: 'Celebra la improvisación y la herencia cultural de la región.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/festival%20de%20la%20trova.JPG',
    },
    {
      id: 3,
      nombre: '🖤 Día de la Afrocolombianidad',
      fecha: '21 de mayo',
      descripcion: 'Celebrado en Turbo y Necoclí con talleres de tambores, gastronomía y actividades educativas.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://tulua.gov.co/info/tulua_se/media/galeria7252.jpg',
    },
    {
      id: 8,
      nombre: '🎤 Festival Heat',
      fecha: '29 y 30 de mayo',
      descripcion: 'Premios de música latina con presentaciones en vivo y alfombra roja.',
      enlace: 'https://latiquetera.com/events/search?search=medellin',
      imagen: 'https://latiquetera.com/img/attach/Event/4436/AttachedPicture/63097/square_normal.cc82cbdf8660eafac638df1cb2e5f648.jpg',
    },
    {
      id: 4,
      nombre: '🎩 Extremagia – Festival Internacional de Magia',
      fecha: '2 al 7 de junio',
      descripcion: 'Festival con galas internacionales, clases de magia y espectáculos en diversos espacios.',
      enlace: 'https://cadenaser.com/extremadura/2025/05/07/extremagia-llegara-a-medellin-en-su-16-edicion-que-se-celebra-del-2-al-7-de-junio-ser-vegas-altas/',
      imagen: 'https://cadenaser.com/resizer/v2/D4AZ3WQ25VBG3CYQJ2Z7ZYOQOE.jpg?auth=d3b2bbdf8111df3ad47d5caa8fac5f0cadb2cbc7bd8158ddd327235f5e8748da&quality=70&width=1200&height=900&smart=true',
    },
    {
      id: 9,
      nombre: '🎶 Festival de Música Andina Colombiana "Mono Núñez"',
      fecha: 'Junio',
      descripcion: 'Festival que celebra la música andina colombiana, con participación de artistas de todo el país.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://destinocaldas.com/wp-content/uploads/2025/04/mono.jpg',
    },
    {
      id: 5,
      nombre: '🌸 Feria de las Flores',
      fecha: '1 al 10 de agosto',
      descripcion: 'Celebra la cultura paisa con desfiles, conciertos y actividades para toda la familia.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://www.wradio.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2F524NYX556RBEHPNBOC65WEF7OI.jpeg?auth=42e64ac02d1044fad06a0b4c76e24b10bd18299fd454a04c1c00f81f55a828a0&height=794&width=1008&quality=70&smart=true',
    },
    {
      id: 10,
      nombre: '🌽 Festival del Maíz',
      fecha: 'Agosto',
      descripcion: 'Celebración de la importancia del maíz en la cultura local con desfiles, muestras gastronómicas y actividades tradicionales.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://fondocultura.org/wp-content/uploads/2024/06/ramiriqui-festival-internacional-del-maiz-el-sorbo-y-la-arepa-2024.jpg',
    },
    {
      id: 6,
      nombre: '📚 Fiesta del Libro y la Cultura',
      fecha: '12 al 21 de septiembre',
      descripcion: 'Actividades gratuitas relacionadas con la literatura, la ilustración y la comunicación.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://fiestadellibroylacultura.com/wp-content/uploads/2024/08/imagen-destacada.webp',
    },
    {
      id: 11,
      nombre: '🎨 Festival de las Artes de Rionegro',
      fecha: 'Septiembre',
      descripcion: 'Escenario para las artes plásticas, la música y la danza, promoviendo el talento local.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://viajaporcolombia.com/images/fiestas-de-las-tradiciones-rionegreras-2024-en-rionegro-antioquia.jpg',
    },
    {
      id: 7,
      nombre: '🎬 Cine Diverse',
      fecha: 'Octubre',
      descripcion: 'Festival de cine LGBTQ+ con proyecciones y foros inclusivos.',
      enlace: 'https://www.infobae.com/colombia/2025/03/11/medellin-anuncio-las-fechas-de-sus-principales-eventos-culturales-asi-quedo-el-calendario/',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHxFWd914RANkV9dZPnE2eBO7OVWt_PxEuA&s',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-emerald-800">Eventos para la diversidad antioqueña – 2025</h2>
      <p className="text-lg text-emerald-700">
        Desde celebraciones culturales hasta festivales de cine, estos eventos destacan la riqueza de las comunidades que habitan Antioquia.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHovered(evento.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                width={500}
                height={300}
                src={evento.imagen}
                alt={evento.nombre}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center p-4 transition-opacity duration-300 ${
                  hovered === evento.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <a
                  href={evento.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white py-2 px-4 rounded-full text-sm font-semibold"
                >
                  Más información
                </a>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-emerald-800">{evento.nombre}</h3>
              <p className="text-sm text-emerald-600">{evento.fecha}</p>
              <p className="text-sm text-emerald-700 mt-2">{evento.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
