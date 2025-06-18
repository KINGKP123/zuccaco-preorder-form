
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PreOrderData } from '@/types/preorder';

interface BusinessDetailsStepProps {
  data: PreOrderData;
  onUpdate: (data: PreOrderData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const BusinessDetailsStep = ({ data, onUpdate, onNext, onPrev }: BusinessDetailsStepProps) => {
  const handleInputChange = (field: keyof PreOrderData, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  const isFormValid = data.businessName && data.fullName && data.email && data.phone;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Details</h2>
          <p className="text-gray-600">Tell us about your business so we can tailor our service to your needs.</p>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="businessName" className="text-base font-medium">
              Business Name *
            </Label>
            <Input
              id="businessName"
              value={data.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              placeholder="Enter your business name"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="fullName" className="text-base font-medium">
              Your Full Name *
            </Label>
            <Input
              id="fullName"
              value={data.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              placeholder="Enter your full name"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="roleTitle" className="text-base font-medium">
              Your Role/Title <span className="text-gray-500">(optional)</span>
            </Label>
            <Input
              id="roleTitle"
              value={data.roleTitle}
              onChange={(e) => handleInputChange('roleTitle', e.target.value)}
              placeholder="e.g., Owner, Manager, Purchasing Manager"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@business.com"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-base font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="04XX XXX XXX"
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={onPrev}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button 
            onClick={onNext}
            disabled={!isFormValid}
            className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsStep;
