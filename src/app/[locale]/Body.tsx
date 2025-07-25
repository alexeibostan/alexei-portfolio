import BrowserLanguageDetector from '@/components/BrowserLanguageDetector';

export default function Body({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BrowserLanguageDetector />
      {children}
    </>
  );
}
