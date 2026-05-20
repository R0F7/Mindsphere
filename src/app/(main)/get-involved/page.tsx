import ContactSection from "../../components/contact-section";
import AuthSection from "../../components/get-involved/auth-section";
import CertificateVerifySection from "../../components/get-involved/certificate-verify-section";
import Hero from "../../components/get-involved/hero";
import JoinSection from "../../components/get-involved/join-section";
import Newsletter from "../../components/newsletter";

export default function GetInvolved() {
  return (
    <>
      <Hero />
      <JoinSection />
      <AuthSection />
      <ContactSection />
      <CertificateVerifySection />
      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
}
