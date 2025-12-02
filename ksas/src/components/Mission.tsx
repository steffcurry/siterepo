import { Heart, Target, Sparkles } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-24 bg-[#F4F6F3] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3D2E] via-[#4CAF50] to-[#C9A646]"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-[#4CAF50]"></div>
            <Target className="w-6 h-6 text-[#4CAF50]" />
            <div className="w-12 h-0.5 bg-[#4CAF50]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D2E] mb-4">
            Η Αποστολή Μας
          </h2>
          <p className="text-xl text-[#5A4634] max-w-3xl mx-auto leading-relaxed">
            Μεταμορφώνουμε απορριμμένα υλικά σε χρήσιμα, όμορφα και φιλικά προς το περιβάλλον προϊόντα
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#4CAF50] hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">
                    Σεβασμός στον Πλανήτη
                  </h3>
                  <p className="text-[#5A4634] leading-relaxed">
                    Μειώνουμε τα απορρίμματα και εξοικονομούμε φυσικούς πόρους, προστατεύοντας το περιβάλλον για τις επόμενες γενιές.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#C9A646] hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9A646]/10 rounded-xl flex items-center justify-center group-hover:bg-[#C9A646]/20 transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-[#C9A646]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-2">
                    Καινοτομία & Δημιουργικότητα
                  </h3>
                  <p className="text-[#5A4634] leading-relaxed">
                    Με έξυπνη μηχανική και καινοτόμες διαδικασίες, δίνουμε νέα ζωή σε αντικείμενα με εντελώς διαφορετικές λειτουργίες.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#0B3D2E] to-[#4CAF50] rounded-3xl p-12 text-[#F4F6F3] shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A646]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4CAF50]/30 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
                  "Τίποτα δεν είναι πραγματικά άχρηστο — απλώς χρειάζεται έναν νέο σκοπό."
                </blockquote>
                <div className="w-16 h-1 bg-[#C9A646] rounded"></div>
                <p className="mt-6 text-[#A8C3B0] text-lg">
                  Κάθε αντικείμενο που σώζουμε είναι μια ευκαιρία να προστατεύσουμε τον πλανήτη και να εμπνεύσουμε αλλαγή.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
