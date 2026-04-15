import { PageBackgroundShell } from "@/components/page-background-shell"

export default function ReferentiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageBackgroundShell imageSrc="/images/achtergronden/landgoed.webp">
      {children}
    </PageBackgroundShell>
  )
}
