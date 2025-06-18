
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PreOrderData } from '@/types/preorder';

interface ProductOrderStepProps {
  data: PreOrderData;
  onUpdate: (data: PreOrderData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProductOrderStep = ({ data, onUpdate, onNext, onPrev }: ProductOrderStepProps) => {
  const handleProductUpdate = (product: 'dinnerNapkins' | 'kitchenRolls' | 'compressedTowels', field: 'quantity' | 'customAmount', value: string) => {
    onUpdate({
      ...data,
      [product]: {
        ...data[product],
        [field]: value,
        // Clear custom amount if selecting a preset quantity
        ...(field === 'quantity' && value !== 'other' ? { customAmount: '' } : {})
      }
    });
  };

  const hasAnySelection = () => {
    return data.dinnerNapkins.quantity || data.kitchenRolls.quantity || data.compressedTowels.quantity;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-sans">What Would You Like to Order?</h2>
          <p className="text-gray-600">Select the products and quantities you'd like to pre-order. All prices are exclusive of GST.</p>
        </div>

        <div className="space-y-8">
          {/* Dinner Napkins */}
          <div className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dinner Napkins</h3>
                <p className="text-gray-600 mb-2">2-ply, 40cm x 40cm, 1200 per carton</p>
                <p className="font-medium text-lg" style={{ color: '#0e0e0e' }}>$36.50 – $40.00 per carton (ex. GST)</p>
              </div>
              <div className="ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&h=120&fit=crop&crop=center" 
                  alt="Dinner Napkins"
                  className="w-20 h-20 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-3 block">How many cartons would you like to pre-order?</Label>
              <RadioGroup 
                value={data.dinnerNapkins.quantity} 
                onValueChange={(value) => handleProductUpdate('dinnerNapkins', 'quantity', value)}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {['100', '250', '500', '1000', '1500+', 'other'].map((option) => (
                  <div key={option} className="flex items-center space-x-2 border-2 border-orange-200 bg-white rounded-lg p-3 hover:bg-orange-50 hover:border-orange-300 transition-colors">
                    <RadioGroupItem value={option} id={`napkins-${option}`} />
                    <Label htmlFor={`napkins-${option}`} className="cursor-pointer font-medium">
                      {option === 'other' ? 'Other amount' : option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {data.dinnerNapkins.quantity === 'other' && (
                <Input
                  placeholder="Enter custom amount"
                  value={data.dinnerNapkins.customAmount}
                  onChange={(e) => handleProductUpdate('dinnerNapkins', 'customAmount', e.target.value)}
                  className="mt-3 max-w-xs border-orange-300 focus:border-orange-500"
                />
              )}
            </div>
          </div>

          {/* Multi-Purpose Cleaning Wipes */}
          <div className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Purpose Cleaning Wipes</h3>
                <p className="text-gray-600 mb-2">65gsm, 30x50cm, 90 sheets per roll, 45m roll</p>
                <p className="font-medium text-lg" style={{ color: '#0e0e0e' }}>$13.00 – $15.00 per roll (ex. GST)</p>
              </div>
              <div className="ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=120&h=120&fit=crop&crop=center" 
                  alt="Multi-Purpose Cleaning Wipes"
                  className="w-20 h-20 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-3 block">How many rolls would you like to pre-order?</Label>
              <RadioGroup 
                value={data.kitchenRolls.quantity} 
                onValueChange={(value) => handleProductUpdate('kitchenRolls', 'quantity', value)}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {['100', '500', '1000', '3000', '5000+', 'other'].map((option) => (
                  <div key={option} className="flex items-center space-x-2 border-2 border-blue-200 bg-white rounded-lg p-3 hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <RadioGroupItem value={option} id={`rolls-${option}`} />
                    <Label htmlFor={`rolls-${option}`} className="cursor-pointer font-medium">
                      {option === 'other' ? 'Other amount' : option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {data.kitchenRolls.quantity === 'other' && (
                <Input
                  placeholder="Enter custom amount"
                  value={data.kitchenRolls.customAmount}
                  onChange={(e) => handleProductUpdate('kitchenRolls', 'customAmount', e.target.value)}
                  className="mt-3 max-w-xs border-blue-300 focus:border-blue-500"
                />
              )}
            </div>
          </div>

          {/* Compressed Towels */}
          <div className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compressed Towels</h3>
                <p className="text-gray-600 mb-2">Expands with water, 22x24cm</p>
                <p className="font-medium text-lg" style={{ color: '#0e0e0e' }}>$0.13 – $0.15 per unit (ex. GST)</p>
              </div>
              <div className="ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=120&h=120&fit=crop&crop=center" 
                  alt="Compressed Towels"
                  className="w-20 h-20 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-3 block">How many towels would you like to pre-order?</Label>
              <RadioGroup 
                value={data.compressedTowels.quantity} 
                onValueChange={(value) => handleProductUpdate('compressedTowels', 'quantity', value)}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {['10,000', '50,000', '100,000', '120,000', '250,000+', 'other'].map((option) => (
                  <div key={option} className="flex items-center space-x-2 border-2 border-green-200 bg-white rounded-lg p-3 hover:bg-green-50 hover:border-green-300 transition-colors">
                    <RadioGroupItem value={option} id={`towels-${option}`} />
                    <Label htmlFor={`towels-${option}`} className="cursor-pointer font-medium">
                      {option === 'other' ? 'Other amount' : option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {data.compressedTowels.quantity === 'other' && (
                <Input
                  placeholder="Enter custom amount"
                  value={data.compressedTowels.customAmount}
                  onChange={(e) => handleProductUpdate('compressedTowels', 'customAmount', e.target.value)}
                  className="mt-3 max-w-xs border-green-300 focus:border-green-500"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={onPrev}
            className="flex items-center gap-2 border-gray-300 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button 
            onClick={onNext}
            disabled={!hasAnySelection()}
            className="text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#0e0e0e' }}
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderStep;
