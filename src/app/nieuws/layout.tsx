import { PageBackgroundShell } from "@/components/page-background-shell"

export default function NieuwsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageBackgroundShell imageSrc="/images/achtergronden/grondverwerving.png">
      {children}
    </PageBackgroundShell>
  )
}
