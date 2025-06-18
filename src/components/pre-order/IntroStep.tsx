import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Clock } from 'lucide-react';
interface IntroStepProps {
  onNext: () => void;
}
const IntroStep = ({
  onNext
}: IntroStepProps) => {
  return <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pre-Order with <span className="text-orange-600">Zucca & Co.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Secure your first batch of high-quality essentials at cost-effective prices
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            <Package className="w-5 h-5" />
            No payment now — we'll confirm details with you before finalising your order
          </div>
        </div>

        {/* Main content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Zucca & Co. is now taking pre-orders for napkins, multi purpose cleaning wipes, and compressed towels — designed for hospitality, priced better than wholesale.</h2>
          <p className="text-lg text-gray-600">
            No payment required. We'll confirm everything before processing your order.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <ShoppingCart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Reserve Your Stock</h3>
            <p className="text-gray-600">Secure your products at pre-order pricing before general availability</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">No Rush</h3>
            <p className="text-gray-600">Take your time to review. We'll confirm all details before processing</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <Package className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">High-quality products designed specifically for hospitality venues</p>
          </div>
        </div>

        {/* CTA */}
        <Button onClick={onNext} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
          Start Your Pre-Order
        </Button>
      </div>
    </div>;
};
export default IntroStep;