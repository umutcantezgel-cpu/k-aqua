'use client';

import { ReactNode, useState } from 'react';

export interface Step {
  id: string;
  title: string;
  content: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: any) => void | Promise<void>;
  formData: any;
  setFormData: (data: any) => void | React.Dispatch<React.SetStateAction<any>>;
}

export function MultiStepForm({ steps, onSubmit, formData, setFormData }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-8">
      <div className="bg-[#D4E5F7] rounded-full h-2 overflow-hidden">
        <div
          className="bg-[#1A6FD4] h-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center mb-8">
        <p className="text-[#4A7299]">Schritt {currentStep + 1} von {steps.length}</p>
        <h2 className="text-2xl font-semibold text-[#0C1929] mt-2">{steps[currentStep].title}</h2>
      </div>

      <div className="min-h-96">
        {steps[currentStep].content}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className="px-6 py-2 border border-[#D4E5F7] rounded-lg text-[#1E3A5C] hover:bg-[#EEF5FF] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Zurück
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-[#1A6FD4] text-white rounded-lg hover:bg-[#0D4999] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
        ) : (
          <button
            onClick={goNext}
            className="px-6 py-2 bg-[#1A6FD4] text-white rounded-lg hover:bg-[#0D4999]"
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
}
