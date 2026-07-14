import NewsCard from "./NewsCard";
import { news } from "../data/news";

function LatestNews() {
  return (
    <section className="bg-slate-950 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-white">
          📰 Latest Entertainment News
        </h2>

        <div className="flex flex-wrap gap-6">
          {news.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              source={article.source}
              published={article.published}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;