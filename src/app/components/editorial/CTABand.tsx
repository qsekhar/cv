import Wrap from "./Wrap";
import Kicker from "./Kicker";
import { ButtonLink } from "./Button";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=919674540974";

export default function CTABand({
  kicker,
  title,
  body,
  primaryHref = "/contact",
  primaryLabel = "Say hi.",
}: {
  kicker: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="border-t border-line">
      <Wrap className="py-9 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6">
          <div>
            <Kicker rule className="block mb-3">
              {kicker}
            </Kicker>
            <h2 className="font-serif text-h1 text-ink">{title}</h2>
            <p className="mt-3 text-body text-ink/80 max-w-[50ch]">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink variant="primary" href={primaryHref}>
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href={WHATSAPP_URL}
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
