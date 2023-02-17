import cForD from './cForD2.png'

const projects = [
  {
    name: 'ContentForDevelopers.com',
    description: 'Open-source project created and maintained by me with a growing list of almost 20 contributors. A site with education and learning as a top priority. Utilizing the power of open-source contributors to offer the most diverse collection of learning tools for coding.',
    imageUrl:{cForD},
    github: 'www.github.com/mathcodes/ContentForDevelopers',
    live: 'www.ContentForDevelopers.com',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'postcss', 'open-source project'],
  },
  // More people...
]

export default function Card() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {projects.map((p) => (
            <li key={p.name} className="rounded-2xl bg-gray-800 py-10 px-8">
              <img className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={p.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{p.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{p.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={p.live} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Live</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="none"  viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.056 11.5-1.221-1.222a4.556 4.556 0 0 1 6.443-6.443L11.5 5.056M7.5 7.5l5 5m2.444-4 1.222 1.222a4.556 4.556 0 0 1-6.444 6.444L8.5 14.944"
      />
    </svg>
                  </a>
                </li>
                <li>
                  <a href={p.github} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
