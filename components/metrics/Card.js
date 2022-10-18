export default function MetricCard({ header, link, metric, isCurrency }) {
  return (
    // <div className="metric-card max-w-72 w-full rounded-lg bg-gray-200 p-4 backdrop-filter transition-transform transition duration-200 hover:bg-gray-600 hover:bg-opacity-40 dark:bg-[#1a2532] dark:hover:bg-slate-600 dark:hover:bg-opacity-40">
    <div className="metric-card max-w-72 w-full rounded-lg border-2 border-slate-500 p-4 hover:bg-primary-500 hover:bg-opacity-50 dark:hover:bg-[#b2ed57] dark:hover:bg-opacity-60  ">
      <a aria-label={header} target="_blank" rel="noopener noreferrer" href={link}>
        <div className="flex items-center text-gray-900 dark:text-gray-100">
          {header}
          <svg
            className="ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="spacing-sm mt-2 text-3xl font-bold text-black dark:text-white">
        {metric > 0 && isCurrency && '$'}
        {metric > 0 ? metric.toLocaleString() : '-'}
      </p>
    </div>
  )
}
