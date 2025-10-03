import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  shipmentType: string;
  weight?: string;
  shipmentDate: string;
  details?: string;
  root?: { message: string };
}

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9+\s-]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  pickup: yup.string().required('Pickup location is required'),
  dropoff: yup.string().required('Drop-off location is required'),
  shipmentType: yup.string().required('Please select a shipment type'),
  weight: yup.string().optional(),
  shipmentDate: yup.string().required('Please select a preferred date'),
  details: yup.string().optional(),
});

const shipmentTypes = [
  'Documents',
  'Parcels',
  'Household Goods',
  'Commercial Cargo',
  'Other'
] as const;

const GetQuoteForm: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setError 
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'An error occurred during submission.');
      }

      // Handle success
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your logistics quote request has been submitted. We\'ll contact you shortly.',
      });
      reset(); // Reset form fields

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('Submission Error:', error);

      // Handle error
      setSubmitStatus({
        success: false,
        message: `Failed to submit your request: ${errorMessage}`,
      });

      // Optionally, set a form-level error to be displayed
      setError('root', {
        type: 'manual',
        message: errorMessage,
      });

    } finally {
      // Ensure the submitting state is always reset
      setIsSubmitting(false);
    }
  };

  if (submitStatus?.success) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">{submitStatus.message}</p>
          <p className="text-gray-600 mt-4">For urgent inquiries, please call us at 
            <a href="tel:+923432426160" className="text-blue-600 hover:underline ml-1">+92 343 2426160</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get a Free Quote</h2>
      
      {submitStatus && !submitStatus.success && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {errors.root && (
          <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
            {errors.root.message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+92 343 2426160"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Shipment Type */}
          <div>
            <label htmlFor="shipmentType" className="block text-sm font-medium text-gray-700 mb-1">
              Shipment Type <span className="text-red-500">*</span>
            </label>
            <select
              id="shipmentType"
              {...register('shipmentType')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.shipmentType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a shipment type</option>
              {shipmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.shipmentType && (
              <p className="mt-1 text-sm text-red-600">{errors.shipmentType.message}</p>
            )}
          </div>

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <input
              id="pickup"
              type="text"
              {...register('pickup')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.pickup ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Street, City, Country"
            />
            {errors.pickup && (
              <p className="mt-1 text-sm text-red-600">{errors.pickup.message}</p>
            )}
          </div>

          {/* Drop-off Location */}
          <div>
            <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">
              Drop-off Location <span className="text-red-500">*</span>
            </label>
            <input
              id="dropoff"
              type="text"
              {...register('dropoff')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.dropoff ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Street, City, Country"
            />
            {errors.dropoff && (
              <p className="mt-1 text-sm text-red-600">{errors.dropoff.message}</p>
            )}
          </div>

          {/* Weight / Volume */}
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Weight / Volume (Optional)
            </label>
            <input
              id="weight"
              type="text"
              {...register('weight')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 10 kg, 5x5x5 ft"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="shipmentDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date of Shipment <span className="text-red-500">*</span>
            </label>
            <input
              id="shipmentDate"
              type="date"
              {...register('shipmentDate')}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.shipmentDate ? 'border-red-500' : 'border-gray-300'
              }`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.shipmentDate && (
              <p className="mt-1 text-sm text-red-600">{errors.shipmentDate.message}</p>
            )}
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details (Optional)
          </label>
          <textarea
            id="details"
            {...register('details')}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Any special requirements or additional information..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-md'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Get Free Quote'
            )}
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We'll get back to you within 24 hours
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default GetQuoteForm;
