export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="band-bg px-4 pb-14 pt-12 text-white sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="animate-fade-up text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>
        <p className="animate-fade-up delay-1 mt-4 max-w-2xl text-base text-white/90">{subtitle}</p>
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-muted sm:px-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 ? <span>/</span> : null}
            {item.href ? (
              <a className="hover:text-brand" href={item.href}>
                {item.label}
              </a>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
