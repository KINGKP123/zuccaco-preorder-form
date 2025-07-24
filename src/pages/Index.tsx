import { useState } from 'react';
import IntroStep from '@/components/pre-order/IntroStep';
import BusinessDetailsStep from '@/components/pre-order/BusinessDetailsStep';
import VenueDetailsStep from '@/components/pre-order/VenueDetailsStep';
import ProductOrderStep from '@/components/pre-order/ProductOrderStep';
import AdditionalNotesStep from '@/components/pre-order/AdditionalNotesStep';
import ConfirmationStep from '@/components/pre-order/ConfirmationStep';
import { PreOrderData } from '@/types/preorder';
const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preOrderData, setPreOrderData] = useState<PreOrderData>({
    businessName: '',
    fullName: '',
    roleTitle: '',
    email: '',
    phone: '',
    venueType: '',
    location: '',
    dinnerNapkins: {
      quantity: '',
      customAmount: ''
    },
    kitchenRolls: {
      quantity: '',
      customAmount: ''
    },
    compressedTowels: {
      quantity: '',
      customAmount: ''
    },
    notes: ''
  });
  const steps = [<IntroStep key="intro" onNext={() => setCurrentStep(1)} />, <BusinessDetailsStep key="business" data={preOrderData} onUpdate={setPreOrderData} onNext={() => setCurrentStep(2)} onPrev={() => setCurrentStep(0)} />, <VenueDetailsStep key="venue" data={preOrderData} onUpdate={setPreOrderData} onNext={() => setCurrentStep(3)} onPrev={() => setCurrentStep(1)} />, <ProductOrderStep key="products" data={preOrderData} onUpdate={setPreOrderData} onNext={() => setCurrentStep(4)} onPrev={() => setCurrentStep(2)} />, <AdditionalNotesStep key="notes" data={preOrderData} onUpdate={setPreOrderData} onNext={() => setCurrentStep(5)} onPrev={() => setCurrentStep(3)} />, <ConfirmationStep key="confirmation" data={preOrderData} />];
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8 bg-emerald-950">
        {/* Progress indicator */}
        {currentStep > 0 && currentStep < 5 && <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">Step {currentStep} of 4</span>
              <span className="text-sm text-gray-600">{Math.round(currentStep / 4 * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full transition-all duration-300" style={{
            width: `${currentStep / 4 * 100}%`
          }}></div>
            </div>
          </div>}
        
        {steps[currentStep]}
      </div>
    </div>;
};
export default Index;