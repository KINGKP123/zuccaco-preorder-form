
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PreOrderData } from '@/types/preorder';

interface VenueDetailsStepProps {
  data: PreOrderData;
  onUpdate: (data: PreOrderData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const VenueDetailsStep = ({ data, onUpdate, onNext, onPrev }: VenueDetailsStepProps) => {
  const handleInputChange = (field: keyof PreOrderData, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  const isFormValid = data.venueType && data.location;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Your Venue</h2>
          <p className="text-gray-600">Help us understand your venue type and location for better service.</p>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="venueType" className="text-base font-medium">
              What type of venue do you run? *
            </Label>
            <Select onValueChange={(value) => handleInputChange('venueType', value)} value={data.venueType}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select your venue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cafe">Café</SelectItem>
                <SelectItem value="restaurant">Restaurant</SelectItem>
                <SelectItem value="bar">Bar</SelectItem>
                <SelectItem value="gym">Gym</SelectItem>
                <SelectItem value="hotel">Hotel</SelectItem>
                <SelectItem value="catering">Catering Company</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location" className="text-base font-medium">
              Location (Suburb/City) *
            </Label>
            <Input
              id="location"
              value={data.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="e.g., Melbourne CBD, Sydney, Brisbane"
              className="mt-2"
            />
            <p className="text-sm text-gray-500 mt-1">
              This helps us plan delivery logistics and regional availability
            </p>
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
            Continue to Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetailsStep;
