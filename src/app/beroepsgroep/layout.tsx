import { PageBackgroundShell } from "@/components/page-background-shell"

export default function BeroepsgroepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageBackgroundShell imageSrc="/images/achtergronden/rentmeester_bg.webp">
      {children}
    </PageBackgroundShell>
  )
}
