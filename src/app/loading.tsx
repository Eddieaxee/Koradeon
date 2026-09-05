export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-stone-900 rounded-2xl flex items-center justify-center">
            <span className="text-4xl font-serif text-ivory-50">K</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="animate-fade-in-up delay-200">
          <h2 className="text-xl font-serif text-stone-900 mb-2">KÓRADEON</h2>
          <p className="text-sm text-stone-600 tracking-widest uppercase">Loading...</p>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8 animate-fade-in delay-400">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              style={{ animation: `float 1s ease-in-out ${index * 0.2}s infinite` }}
              className="w-2 h-2 bg-champagne-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
