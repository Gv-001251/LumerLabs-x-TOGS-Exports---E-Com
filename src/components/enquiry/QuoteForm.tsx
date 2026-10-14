"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Code2,
  Clock,
  Shield,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { EnquiryFormData, EnquirySubmissionResult } from "@/types/enquiry";
import { EnquiryService, ValidationErrors } from "@/services/enquiryService";

interface QuoteFormProps {
  prefilledProduct?: string;
  className?: string;
  compact?: boolean;
}

export default function QuoteForm({
  prefilledProduct = "",
  className = "",
  compact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    country: "",
    productOrService: prefilledProduct || "Industrial Components",
    estimatedQuantity: "",
    requiredSpecifications: "",
    additionalMessage: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EnquirySubmissionResult | null>(null);
  const [showZohoPayload, setShowZohoPayload] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for field being edited
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    const validation = EnquiryService.validate(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await EnquiryService.submitEnquiry(formData);
      setSubmissionResult(result);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to process enquiry.";
      setErrors({ fullName: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      companyName: "",
      businessEmail: "",
      phoneNumber: "",
      country: "",
      productOrService: prefilledProduct || "Industrial Components",
      estimatedQuantity: "",
      requiredSpecifications: "",
      additionalMessage: "",
      privacyConsent: false,
    });
    setErrors({});
  };

  if (submissionResult) {
    return (
      <div className="bg-white rounded-xl border border-emerald-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              Enquiry Schema Validated
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Commercial Request Registered
            </h3>
            <p className="text-sm text-slate-600">
              Reference ID: <span className="font-mono font-bold text-slate-900">{submissionResult.referenceId}</span>
            </p>
          </div>
        </div>

        {/* Transparent Demonstration Notice */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-amber-800">
            <Shield className="w-4 h-4 text-amber-600" />
            <span>Demonstration Environment Confirmation</span>
          </div>
          <p>{submissionResult.demonstrationNotice}</p>
        </div>

        {/* Submitted Summary Table */}
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2 text-xs">
          <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px] pb-1 border-b border-slate-200">
            Enquiry Intake Summary
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
            <div><span className="font-semibold text-slate-900">Name:</span> {formData.fullName}</div>
            <div><span className="font-semibold text-slate-900">Company:</span> {formData.companyName}</div>
            <div><span className="font-semibold text-slate-900">Email:</span> {formData.businessEmail}</div>
            <div><span className="font-semibold text-slate-900">Country:</span> {formData.country}</div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-slate-900">Product / Service:</span> {formData.productOrService}
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-slate-900">Specifications:</span> {formData.requiredSpecifications}
            </div>
          </div>
        </div>

        {/* Collapsible Zoho CRM API Payload Inspector */}
        <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
          <button
            type="button"
            onClick={() => setShowZohoPayload(!showZohoPayload)}
            className="w-full px-4 py-3 bg-slate-100 hover:bg-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-800 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Inspect Prepared Zoho CRM Lead Payload (API v2 / v3 Schema)</span>
            </div>
            {showZohoPayload ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showZohoPayload && (
            <div className="p-4 bg-slate-950 text-slate-200 text-[11px] font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(submissionResult.preparedZohoPayload, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 rounded-md text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Submit Another Demonstration Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl border border-slate-200 ${compact ? "p-4 sm:p-5" : "p-6 sm:p-8"} shadow-xs space-y-5 ${className}`}
      noValidate
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <span>Request a Commercial Quotation</span>
          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
            B2B Procurement
          </span>
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Provide your project drawings, target quantities, and engineering specifications for a structured proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Marcus Vance"
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.fullName ? "border-red-500 bg-red-50/30" : "border-slate-300 focus:border-blue-600"
            } focus:outline-none transition-colors`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1">
            Company / Organization Name <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Apex Industrial Systems GmbH"
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.companyName ? "border-red-500 bg-red-50/30" : "border-slate-300 focus:border-blue-600"
            } focus:outline-none transition-colors`}
          />
          {errors.companyName && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.companyName}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="businessEmail" className="block text-xs font-semibold text-slate-700 mb-1">
            Corporate Email <span className="text-red-500">*</span>
          </label>
          <input
            id="businessEmail"
            name="businessEmail"
            type="email"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.businessEmail ? "border-red-500 bg-red-50/30" : "border-slate-300 focus:border-blue-600"
            } focus:outline-none transition-colors`}
          />
          {errors.businessEmail && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.businessEmail}
            </p>
          )}
        </div>

        {/* Phone Number (Optional) */}
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-700 mb-1">
            Telephone / Mobile <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (555) 019-2834"
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-xs font-semibold text-slate-700 mb-1">
            Country / Destination Territory <span className="text-red-500">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. Germany, United States, UAE, Singapore"
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.country ? "border-red-500 bg-red-50/30" : "border-slate-300 focus:border-blue-600"
            } focus:outline-none transition-colors`}
          />
          {errors.country && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.country}
            </p>
          )}
        </div>

        {/* Product or Service of Interest */}
        <div>
          <label htmlFor="productOrService" className="block text-xs font-semibold text-slate-700 mb-1">
            Product Category or Service <span className="text-red-500">*</span>
          </label>
          <select
            id="productOrService"
            name="productOrService"
            value={formData.productOrService}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.productOrService ? "border-red-500 bg-red-50/30" : "border-slate-300 focus:border-blue-600"
            } focus:outline-none bg-white transition-colors`}
          >
            <option value="Industrial Components">Industrial Components (Precision Turned &amp; Milled)</option>
            <option value="Engineered Parts">Engineered Parts (Gears, Assemblies &amp; Shafts)</option>
            <option value="Custom Manufacturing">Custom Manufacturing (Bespoke OEM / ODM)</option>
            <option value="Packaging & Industrial Supplies">Packaging &amp; Industrial Supplies (ISPM-15)</option>
            <option value="Contract Prototyping">Contract Prototyping &amp; Pilot Batch</option>
            <option value="Export Logistics Partnership">Export Logistics &amp; Trade Partnership</option>
          </select>
          {errors.productOrService && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.productOrService}
            </p>
          )}
        </div>

        {/* Estimated Order Quantity */}
        <div className="sm:col-span-2">
          <label htmlFor="estimatedQuantity" className="block text-xs font-semibold text-slate-700 mb-1">
            Estimated Production Volume / Quantity <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="estimatedQuantity"
            name="estimatedQuantity"
            type="text"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            placeholder="e.g. 500 units pilot / 5,000 units annual / 1 x 20ft FCL container"
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Required Specifications */}
        <div className="sm:col-span-2">
          <label htmlFor="requiredSpecifications" className="block text-xs font-semibold text-slate-700 mb-1">
            Required Specifications &amp; Project Parameters <span className="text-red-500">*</span>
          </label>
          <textarea
            id="requiredSpecifications"
            name="requiredSpecifications"
            rows={3}
            value={formData.requiredSpecifications}
            onChange={handleChange}
            placeholder="Please detail required materials (e.g. 4140 alloy steel), dimensional tolerances, surface treatments, target delivery schedule, or CAD file availability..."
            className={`w-full px-3 py-2 text-sm rounded-md border ${
              errors.requiredSpecifications
                ? "border-red-500 bg-red-50/30"
                : "border-slate-300 focus:border-blue-600"
            } focus:outline-none transition-colors`}
          />
          {errors.requiredSpecifications && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.requiredSpecifications}
            </p>
          )}
        </div>

        {/* Additional Message */}
        <div className="sm:col-span-2">
          <label htmlFor="additionalMessage" className="block text-xs font-semibold text-slate-700 mb-1">
            Additional Commercial Notes or Incoterm Preferences <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="additionalMessage"
            name="additionalMessage"
            rows={2}
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder="e.g. Preferred Incoterm (FOB / CIF destination port), target delivery deadline, or special export packaging preferences..."
            className="w-full px-3 py-2 text-sm rounded-md border border-slate-300 focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="pt-2 border-t border-slate-100">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-slate-600 leading-normal">
            I understand that this enquiry will be processed for commercial quotation purposes under mutual confidentiality. I acknowledge that this demonstration website was created by Lumer Labs to illustrate TOGS Exports requirements.
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.privacyConsent}
          </p>
        )}
      </div>

      {/* Form Submission Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>Typical quotation turnaround: 24 business hours</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold text-xs tracking-wider uppercase text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-sm transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
              <span>Validating &amp; Formatting...</span>
            </>
          ) : (
            <>
              <span>Submit Commercial Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
