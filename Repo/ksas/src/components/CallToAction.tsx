import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-[#F4F6F3] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] via-[#C9A646] to-[#0B3D2E]"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0B3D2E] to-[#4CAF50] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 text-[#F4F6F3]">
              <div className="inline-block bg-[#C9A646]/20 backdrop-blur-sm px-4 py-2 rounded-full text-[#C9A646] text-sm font-semibold mb-6">
                Γίνε Μέρος της Αλλαγής
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ξεκινήστε το Ταξίδι προς τη Βιωσιμότητα
              </h2>

              <p className="text-xl text-[#A8C3B0] mb-8 leading-relaxed">
                Κάθε προϊόν που επιλέγετε από τη ReStyle είναι μια συνειδητή απόφαση για έναν πιο πράσινο πλανήτη. Μαζί μπορούμε να κάνουμε τη διαφορά.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Προϊόντα premium από επαναχρησιμοποιημένα υλικά</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Συμβολή στην προστασία του περιβάλλοντος</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Μοναδικά κομμάτια με ιστορία</span>
                </div>
              </div>

              <button className="group bg-[#C9A646] text-[#F4F6F3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#b89540] hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                <span>Ανακαλύψτε τη Συλλογή</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-12 lg:p-16 border-l border-white/10">
              <h3 className="text-2xl font-bold text-[#F4F6F3] mb-8">
                Επικοινωνήστε Μαζί Μας
              </h3>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#C9A646]" />
                  </div>
                  <div>
                    <div className="text-[#A8C3B0] text-sm mb-1">Email</div>
                    <div className="text-[#F4F6F3] font-semibold">info@restyle.gr</div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#C9A646]" />
                  </div>
                  <div>
                    <div className="text-[#A8C3B0] text-sm mb-1">Τηλέφωνο</div>
                    <div className="text-[#F4F6F3] font-semibold">+30 210 XXX XXXX</div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#C9A646]" />
                  </div>
                  <div>
                    <div className="text-[#A8C3B0] text-sm mb-1">Διεύθυνση</div>
                    <div className="text-[#F4F6F3] font-semibold">Αθήνα, Ελλάδα</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[#A8C3B0] text-sm leading-relaxed">
                  Έχετε ερωτήσεις ή θέλετε να μάθετε περισσότερα για τις διαδικασίες μας; Επικοινωνήστε μαζί μας — θα χαρούμε να σας βοηθήσουμε!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-[#5A4634]">
            <span className="text-3xl">🌍</span>
            <p className="text-lg">
              <span className="font-semibold text-[#0B3D2E]">Μαζί</span> δημιουργούμε έναν{' '}
              <span className="font-semibold text-[#4CAF50]">καθαρότερο</span>,{' '}
              <span className="font-semibold text-[#C9A646]">εξυπνότερο</span> και{' '}
              <span className="font-semibold text-[#0B3D2E]">βιώσιμο</span> κόσμο
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
