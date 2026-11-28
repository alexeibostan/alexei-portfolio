import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("connect");
  return (
    <footer className="bg-[#080808] px-4 pb-10 pt-2 text-center">
      <p className="mx-auto max-w-[640px] font-mono-brand text-xs leading-relaxed text-white/60">
        {t("copyright", { year: new Date().getFullYear() })}
        {" · Bostan Software Developments · KvK 94926697 · VAT NL005118619B33"}
      </p>
    </footer>
  );
}
