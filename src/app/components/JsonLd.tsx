export default function JsonLd({
  data,
  id,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}) {
  if (!data || (Array.isArray(data) && data.length === 0)) return null;
  const json = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  return (
    <script
      {...(id ? { id } : {})}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
