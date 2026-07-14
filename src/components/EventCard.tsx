type Props = {
  title: string;
  venue: string;
  date: string;
  time: string;
  category: string;
  pulseScore: number;
  source: string;
};

function EventCard({
  title,
  venue,
  date,
  time,
  category,
  pulseScore,
  source,
}: Props) {
  return (
    <div className="w-80 overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-44 items-center justify-center bg-slate-800 text-6xl">
        🎉
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
            {category}
          </span>

          <span className="font-bold text-orange-400">
            🔥 {pulseScore}
          </span>
        </div>

        <h3 className="mb-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <div className="space-y-2 text-slate-400">
          <p>📍 {venue}</p>
          <p>📅 {date}</p>
          <p>🕒 {time}</p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500">
          View Original Post
        </button>

        <p className="mt-3 text-center text-sm text-slate-500">
          Source: {source}
        </p>
      </div>
    </div>
  );
}

export default EventCard;