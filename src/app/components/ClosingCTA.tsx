import Wrap from "./editorial/Wrap";
import Kicker from "./editorial/Kicker";
import { ButtonLink } from "./editorial/Button";

export default function ClosingCTA() {
  return (
    <section className="border-t border-line">
      <Wrap className="py-9 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6">
          <div>
            <Kicker rule className="block mb-3">Available · Q2 2026</Kicker>
            <h2 className="font-serif text-h1 text-ink">Start a project.</h2>
            <p className="mt-3 text-body text-ink/80 max-w-[50ch]">
              Free 30-minute consult. We talk through your goals, the right shape of the work,
              and a transparent quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink variant="primary" href="/contact">
              Say hi.
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href="https://api.whatsapp.com/send?phone=919674540974"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </ButtonLink>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
