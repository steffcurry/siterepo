import { Recycle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E] text-[#F4F6F3] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-3">
            <Recycle className="w-8 h-8 text-[#4CAF50]" />
            <span className="text-2xl font-bold">ReStyle</span>
          </div>

          <p className="text-[#A8C3B0] text-lg max-w-2xl leading-relaxed">
            Επανασχεδιάζουμε. Επαναχρησιμοποιούμε. Σεβόμαστε τον Πλανήτη.
          </p>

          <div className="w-16 h-0.5 bg-[#4CAF50] rounded"></div>

          <div className="flex items-center space-x-2 text-sm text-[#A8C3B0]">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#C9A646] fill-current" />
            <span>for a sustainable future</span>
          </div>

          <div className="pt-6 border-t border-white/10 w-full text-center">
            <p className="text-sm text-[#A8C3B0]">
              © {new Date().getFullYear()} ReStyle. Όλα τα δικαιώματα προστατεύονται.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
