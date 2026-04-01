import Image from "next/image"

export default function AanbodLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative isolate min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/achtergronden/achtergrond_aanbod.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/15" aria-hidden />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
