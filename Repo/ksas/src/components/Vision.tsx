import { Globe, Users, Leaf, TrendingUp } from 'lucide-react';

const visionStats = [
  {
    icon: Globe,
    number: '1',
    label: 'Πλανήτης',
    description: 'Που χρειάζεται τη φροντίδα μας',
  },
  {
    icon: Users,
    number: '∞',
    label: 'Δυνατότητες',
    description: 'Για κάθε επαναχρησιμοποιημένο αντικείμενο',
  },
  {
    icon: Leaf,
    number: '100%',
    label: 'Δέσμευση',
    description: 'Στη βιωσιμότητα και την ποιότητα',
  },
  {
    icon: TrendingUp,
    number: '0',
    label: 'Απορρίμματα',
    description: 'Είναι ο στόχος μας',
  },
];

export default function Vision() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0B3D2E] via-[#0B3D2E] to-[#4CAF50] text-[#F4F6F3] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A646] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4CAF50] rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-[#C9A646]"></div>
            <Globe className="w-6 h-6 text-[#C9A646]" />
            <div className="w-12 h-0.5 bg-[#C9A646]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Το Όραμά Μας
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-[#A8C3B0] font-light leading-relaxed mb-8">
              Ένας κόσμος όπου η βιωσιμότητα δεν είναι απλώς επιλογή —{' '}
              <span className="text-[#C9A646] font-semibold">είναι τρόπος ζωής.</span>
            </p>
            <p className="text-lg text-[#A8C3B0] leading-relaxed">
              Στόχος μας είναι να εμπνεύσουμε άτομα, κοινότητες και επιχειρήσεις να ξανασκεφτούν την έννοια του "απορρίμματος" και να επιλέξουν πιο πράσινες λύσεις.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A646]/20 rounded-full mb-4 group-hover:bg-[#C9A646]/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#C9A646]" />
                </div>
                <div className="text-5xl font-bold text-[#C9A646] mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-[#A8C3B0]">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Από το Απορριμμένο στο Αναγεννημένο
              </h3>
              <p className="text-[#A8C3B0] text-lg leading-relaxed mb-6">
                Κάθε προϊόν της ReStyle αφηγείται μια ιστορία μεταμόρφωσης. Από κάτι που θεωρούνταν άχρηστο, δημιουργούμε κάτι λειτουργικό, όμορφο και βιώσιμο.
              </p>
              <ul className="space-y-4">
                {[
                  'Μειώνουμε το περιβαλλοντικό αποτύπωμα',
                  'Εξοικονομούμε φυσικούς πόρους',
                  'Δημιουργούμε μοναδικά προϊόντα',
                  'Εμπνέουμε συνειδητές επιλογές',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#F4F6F3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#C9A646] rounded-3xl p-1">
                <div className="bg-[#0B3D2E] rounded-3xl p-10">
                  <div className="text-center">
                    <div className="text-7xl mb-6">♻️</div>
                    <blockquote className="text-2xl font-light italic leading-relaxed mb-4">
                      "Ένα επαναχρησιμοποιημένο αντικείμενο τη φορά."
                    </blockquote>
                    <div className="w-20 h-1 bg-[#C9A646] mx-auto rounded"></div>
                    <p className="mt-4 text-[#A8C3B0]">
                      Μαζί χτίζουμε ένα καθαρότερο μέλλον
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
