
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Clock } from 'lucide-react';

interface IntroStepProps {
  onNext: () => void;
}

const IntroStep = ({ onNext }: IntroStepProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-t-4 border-orange-400">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'EB Garamond, serif', color: '#0e0e0e' }}>
            <span className="text-orange-500">ZUCCA</span> <span className="text-gray-800">&</span> <span className="text-blue-600">CO.</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Pre-Order with Us
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Secure your first batch of high-quality essentials at cost-effective prices
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full font-medium border border-green-200">
            <Package className="w-5 h-5" />
            No payment now — we'll confirm details with you before finalising your order
          </div>
        </div>

        {/* Main content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Zucca & Co. is now taking pre-orders for napkins, multi-purpose cleaning wipes, and compressed towels — designed for hospitality, priced better than wholesale.
          </h2>
          <p className="text-lg text-gray-600">
            No payment required. We'll confirm everything before processing your order.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Reserve Your Stock</h3>
            <p className="text-gray-600">Secure your products at pre-order pricing before general availability</p>
          </div>
          <div className="text-center p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">No Rush</h3>
            <p className="text-gray-600">Take your time to review. We'll confirm all details before processing</p>
          </div>
          <div className="text-center p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-quality products designed specifically for hospitality venues</p>
          </div>
        </div>

        {/* CTA */}
        <Button 
          onClick={onNext}
          size="lg"
          className="text-white px-8 py-3 text-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
          style={{ backgroundColor: '#0e0e0e' }}
        >
          Start Your Pre-Order
        </Button>
      </div>
    </div>
  );
};

export default IntroStep;
