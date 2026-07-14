type Props = {
  title: string;
  source: string;
  published: string;
};

function NewsCard({ title, source, published }: Props) {
  return (
    <div className="w-80 rounded-2xl bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          News
        </span>

        <span className="text-sm text-slate-400">
          {published}
        </span>
      </div>

      <h3 className="mb-4 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mb-6 text-slate-400">
        Source: {source}
      </p>

      <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500">
        Read More
      </button>
    </div>
  );
}

export default NewsCard;