import { Leaf, RefreshCw, Shield, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Σώζουμε Ξεχασμένα Αντικείμενα',
    description: 'Συλλέγουμε και εξετάζουμε αντικείμενα που φαίνονται χαλασμένα ή παλιά για να τους δώσουμε νέα χρήση.',
    color: '#4CAF50',
    bgColor: 'bg-[#4CAF50]/10',
    borderColor: 'border-[#4CAF50]',
  },
  {
    icon: RefreshCw,
    title: 'Ανακατασκευάζουμε & Επανασχεδιάζουμε',
    description: 'Με καινοτόμες διαδικασίες και δημιουργική τεχνογνωσία, δίνουμε στα αντικείμενα μια νέα ζωή.',
    color: '#C9A646',
    bgColor: 'bg-[#C9A646]/10',
    borderColor: 'border-[#C9A646]',
  },
  {
    icon: Shield,
    title: 'Προστατεύουμε το Περιβάλλον',
    description: 'Μειώνουμε την ανάγκη για καινούρια προϊόντα, εξοικονομώντας πόρους και το περιβαλλοντικό αποτύπωμα.',
    color: '#0B3D2E',
    bgColor: 'bg-[#0B3D2E]/10',
    borderColor: 'border-[#0B3D2E]',
  },
  {
    icon: Lightbulb,
    title: 'Εμπνέουμε την Αλλαγή',
    description: 'Κάθε προϊόν μας είναι απόδειξη ότι η βιωσιμότητα μπορεί να είναι όμορφη, λειτουργική και προσιτή.',
    color: '#A8C3B0',
    bgColor: 'bg-[#A8C3B0]/10',
    borderColor: 'border-[#A8C3B0]',
  },
];

export default function WhyReStyle() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-[#4CAF50]"></div>
            <RefreshCw className="w-6 h-6 text-[#4CAF50] animate-spin-slow" />
            <div className="w-12 h-0.5 bg-[#4CAF50]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D2E] mb-4">
            Γιατί ReStyle;
          </h2>
          <p className="text-xl text-[#5A4634] max-w-3xl mx-auto leading-relaxed">
            Κάθε χρόνο, τόνοι υλικών που μπορούν να επαναχρησιμοποιηθούν καταλήγουν στις χωματερές.
            <br />
            <span className="font-semibold text-[#4CAF50]">Η ReStyle παρεμβαίνει πριν συμβεί αυτό.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#F4F6F3] rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-current"
                style={{ borderColor: feature.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-current opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" style={{ color: feature.color }}></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B3D2E] mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-[#5A4634] leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300" style={{ color: feature.color }}>
                    <span>Μάθετε Περισσότερα</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#0B3D2E] to-[#4CAF50] rounded-3xl p-12 text-center text-[#F4F6F3] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C9A646] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-[#A8C3B0] rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Η Συμμετοχή Σας Κάνει τη Διαφορά
            </h3>
            <p className="text-xl text-[#A8C3B0] max-w-3xl mx-auto leading-relaxed mb-8">
              Κάθε επιλογή που κάνετε για επαναχρησιμοποίηση είναι μια ψήφος για έναν πιο πράσινο πλανήτη.
              Γίνετε μέρος του κινήματος που μετατρέπει το "άχρηστο" σε χρήσιμο.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#C9A646] font-semibold">
              <span className="text-4xl">♻️</span>
              <span className="text-lg">Μαζί δημιουργούμε το μέλλον</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
