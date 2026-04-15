import { PageBackgroundShell } from "@/components/page-background-shell"

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageBackgroundShell imageSrc="/images/achtergronden/pacht.webp">
      {children}
    </PageBackgroundShell>
  )
}
