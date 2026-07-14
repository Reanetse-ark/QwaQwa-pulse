import EventCard from "./EventCard";
import { events } from "../data/events";

function TrendingEvents() {
  const trendingEvents = events.filter((event) => event.trending);

  return (
    <section className="bg-slate-950 px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-white">
          🔥 Trending Events
        </h2>

        <div className="flex flex-wrap gap-6">
          {trendingEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              venue={event.venue}
              date={event.date}
              time={event.time}
              category={event.category}
              pulseScore={event.pulseScore}
              source={event.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingEvents;