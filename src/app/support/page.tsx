import CheckInSection from "../components/support/checkIn-section";
import GuestMoodSection from "../components/support/guest-mood-section";
import HelplineSection from "../components/support/helpline-section";
import Hero from "../components/support/hero";
import InitialScreening from "../components/support/initial-screening";
import SelfHelpTools from "../components/support/self-help-tools";

export default function Support() {
  return (
    <>
      <Hero />
      {/* TODO:make user mood section */}
      <GuestMoodSection />
      <CheckInSection />
      <SelfHelpTools />
      <HelplineSection />
      <InitialScreening />
    </>
  );
}
