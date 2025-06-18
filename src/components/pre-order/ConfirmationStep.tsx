
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { PreOrderData } from '@/types/preorder';

interface ConfirmationStepProps {
  data: PreOrderData;
}

const ConfirmationStep = ({ data }: ConfirmationStepProps) => {
  const getDisplayQuantity = (product: { quantity: string; customAmount: string }) => {
    if (product.quantity === 'other' && product.customAmount) {
      return product.customAmount;
    }
    return product.quantity;
  };

  const hasSelectedProducts = data.dinnerNapkins.quantity || data.kitchenRolls.quantity || data.compressedTowels.quantity;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-4">
            Your pre-order request has been received. We'll be in touch to confirm availability, pricing, and delivery timelines.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            No payment is required yet — we'll invoice once everything is confirmed
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pre-Order Summary</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Business Details</h3>
              <div className="space-y-1 text-gray-600">
                <p><strong>Business:</strong> {data.businessName}</p>
                <p><strong>Contact:</strong> {data.fullName}</p>
                {data.roleTitle && <p><strong>Role:</strong> {data.roleTitle}</p>}
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
                <p><strong>Venue Type:</strong> {data.venueType}</p>
                <p><strong>Location:</strong> {data.location}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2">Products Requested</h3>
              <div className="space-y-2 text-gray-600">
                {data.dinnerNapkins.quantity && (
                  <p><strong>Dinner Napkins:</strong> {getDisplayQuantity(data.dinnerNapkins)} cartons</p>
                )}
                {data.kitchenRolls.quantity && (
                  <p><strong>Multi-Purpose Cleaning Wipes:</strong> {getDisplayQuantity(data.kitchenRolls)} rolls</p>
                )}
                {data.compressedTowels.quantity && (
                  <p><strong>Compressed Towels:</strong> {getDisplayQuantity(data.compressedTowels)} towels</p>
                )}
                {!hasSelectedProducts && (
                  <p className="text-gray-500 italic">No products selected</p>
                )}
              </div>
              
              {data.notes && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-1">Additional Notes</h4>
                  <p className="text-gray-600 text-sm">{data.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us Anytime</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-orange-600 mb-2" />
              <p className="font-medium">Kaavya Parikh</p>
              <p className="text-gray-600">info@zuccaco.com.au</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-orange-600 mb-2" />
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">0426 787 472</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-orange-600 mb-2" />
              <p className="font-medium">Service Area</p>
              <p className="text-gray-600">Australia wide</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.reload()}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
          >
            Submit Another Pre-Order
          </Button>
          <p className="text-sm text-gray-500">
            Expect to hear from us within 24 hours to confirm your order details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
