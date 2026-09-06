export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#12100D]">
      <div className="relative h-20 w-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="KÓRADEON GROUP"
          className="h-full w-full object-contain opacity-95"
        />
      </div>
      <p className="mt-8 font-serif text-lg tracking-[0.42em] text-[#F0EBE4]">KÓRADEON</p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.5em] text-[#8E8578]">Group</p>
      {/* Quiet progress rule */}
      <div className="mt-10 h-px w-40 overflow-hidden bg-white/10">
        <div className="kd-load-bar h-full w-1/3 bg-[#B8A47E]" />
      </div>
    </main>
  )
}