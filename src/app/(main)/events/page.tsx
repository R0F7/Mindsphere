import Hero from "../../components/events/hero";
import PastEvents from "../../components/events/past-events";
import UpcomingEvents from "../../components/events/upcoming-events";

export default function Events() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
