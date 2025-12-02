import { Leaf, Recycle, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E] to-[#4CAF50]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="w-24 h-24 text-[#4CAF50]" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float-delayed">
          <Recycle className="w-32 h-32 text-[#C9A646]" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-pulse-slow">
          <Sparkles className="w-16 h-16 text-[#A8C3B0]" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 bg-[#C9A646]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#C9A646]/30">
            <Recycle className="w-5 h-5 text-[#C9A646]" />
            <span className="text-[#C9A646] font-medium text-sm tracking-wide">
              Επαναχρησιμοποίηση · Ανακύκλωση · Αναγέννηση
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#F4F6F3] mb-6 animate-slide-up leading-tight">
          Δίνουμε στα Αντικείμενα<br />
          <span className="text-[#4CAF50]">Μια Δεύτερη Ζωή</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#A8C3B0] mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delayed">
          Όπου η δημιουργικότητα συναντά τη βιωσιμότητα.
          Πιστεύουμε ότι τίποτα δεν είναι πραγματικά άχρηστο — απλώς χρειάζεται έναν νέο σκοπό.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-slow">
          <button className="group relative px-8 py-4 bg-[#4CAF50] text-[#F4F6F3] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#45a049] hover:shadow-xl hover:scale-105 hover:-translate-y-1">
            <span className="relative z-10">Ανακαλύψτε τη Διαφορά</span>
            <div className="absolute inset-0 rounded-full bg-[#C9A646] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-[#A8C3B0] text-[#F4F6F3] rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#A8C3B0]/10 hover:border-[#4CAF50] hover:scale-105">
            Μάθετε Περισσότερα
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#F4F6F3]">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl font-bold text-[#C9A646] mb-2">100%</div>
            <div className="text-sm text-[#A8C3B0] uppercase tracking-wider">Ανακυκλώσιμα Υλικά</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl font-bold text-[#C9A646] mb-2">0</div>
            <div className="text-sm text-[#A8C3B0] uppercase tracking-wider">Απορρίμματα</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl font-bold text-[#C9A646] mb-2">∞</div>
            <div className="text-sm text-[#A8C3B0] uppercase tracking-wider">Δυνατότητες</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#A8C3B0] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#C9A646] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
