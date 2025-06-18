
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PreOrderData } from '@/types/preorder';

interface AdditionalNotesStepProps {
  data: PreOrderData;
  onUpdate: (data: PreOrderData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const AdditionalNotesStep = ({ data, onUpdate, onNext, onPrev }: AdditionalNotesStepProps) => {
  const handleNotesChange = (value: string) => {
    onUpdate({ ...data, notes: value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Anything Else?</h2>
          <p className="text-gray-600">Share any additional information, questions, or special requirements.</p>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="notes" className="text-base font-medium">
              Any notes, questions, or special requests?
            </Label>
            <Textarea
              id="notes"
              value={data.notes}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="Tell us about any specific delivery requirements, timing preferences, quality specifications, or any questions you might have..."
              className="mt-2 min-h-[120px]"
            />
            <p className="text-sm text-gray-500 mt-2">
              This helps us provide you with the best possible service and address any specific needs your venue might have.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">💡 What happens next?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• We'll review your pre-order request within 24 hours</li>
              <li>• Our team will contact you to confirm pricing and availability</li>
              <li>• We'll arrange delivery timelines that work for your business</li>
              <li>• Payment will only be required after everything is confirmed</li>
            </ul>
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
            className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
          >
            Complete Pre-Order
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalNotesStep;
