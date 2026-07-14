type Props = {
  title: string;
  source: string;
  published: string;
};

function NewsCard({ title, source, published }: Props) {
  return (
    <div className="w-80 rounded-2xl bg-slate-900 p-5 shadow-lg transition hover:scale-105">
      <h3 className="mb-3 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-slate-400">{source}</p>

      <p className="mt-1 text-sm text-slate-500">
        {published}
      </p>

      <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
        Read More
      </button>
    </div>
  );
}

export default NewsCard;