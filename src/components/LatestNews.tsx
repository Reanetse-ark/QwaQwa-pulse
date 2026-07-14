import NewsCard from "./NewsCard";

function LatestNews() {
  return (
    <section className="bg-slate-950 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-white">
          📰 Latest Entertainment News
        </h2>

        <div className="flex flex-wrap gap-6">
          <NewsCard
            title="Summer Bash tickets almost sold out"
            source="Facebook"
            published="2 hours ago"
          />

          <NewsCard
            title="Local artist announces new EP"
            source="Instagram"
            published="Yesterday"
          />

          <NewsCard
            title="New music festival coming to QwaQwa"
            source="Community Page"
            published="3 days ago"
          />
        </div>
      </div>
    </section>
  );
}

export default LatestNews;