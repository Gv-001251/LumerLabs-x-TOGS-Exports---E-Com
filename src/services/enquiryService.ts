import { EnquiryFormData, EnquirySubmissionResult } from "@/types/enquiry";
import { ZohoCrmAdapter } from "@/lib/zohoAdapter";

export interface ValidationErrors {
  fullName?: string;
  companyName?: string;
  businessEmail?: string;
  country?: string;
  productOrService?: string;
  requiredSpecifications?: string;
  privacyConsent?: string;
}

export class EnquiryService {
  /**
   * Validates customer enquiry form fields
   */
  public static validate(data: EnquiryFormData): { isValid: boolean; errors: ValidationErrors } {
    const errors: ValidationErrors = {};

    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (!data.companyName || data.companyName.trim().length < 2) {
      errors.companyName = "Please enter your registered business or company name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.businessEmail || !emailRegex.test(data.businessEmail.trim())) {
      errors.businessEmail = "Please provide a valid business email address.";
    }

    if (!data.country || data.country.trim().length < 2) {
      errors.country = "Please specify your country or export delivery territory.";
    }

    if (!data.productOrService || data.productOrService.trim().length < 2) {
      errors.productOrService = "Please select or describe the product or service of interest.";
    }

    if (!data.requiredSpecifications || data.requiredSpecifications.trim().length < 10) {
      errors.requiredSpecifications =
        "Please provide brief specifications, tolerances, or volume requirements (min 10 characters).";
    }

    if (!data.privacyConsent) {
      errors.privacyConsent = "Please confirm your consent to process your enquiry details.";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  /**
   * Submits the enquiry.
   * In this concept demonstration, this validates and transforms the payload into a production-ready
   * Zoho CRM Lead payload and returns transparent demonstration feedback.
   */
  public static async submitEnquiry(data: EnquiryFormData): Promise<EnquirySubmissionResult> {
    // Simulate real network latency (500ms - 800ms) for realistic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 650));

    const validation = this.validate(data);
    if (!validation.isValid) {
      throw new Error("Validation failed. Please verify the highlighted fields.");
    }

    const zohoPayload = ZohoCrmAdapter.mapToZohoLead(data);
    const referenceId = `TOGS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    return {
      success: true,
      message: "Enquiry validated and ready for commercial processing.",
      demonstrationNotice:
        "Demonstration Notice: Your request data has been validated against the production B2B schema and mapped to Zoho CRM Lead format. In this demonstration concept, no live CRM submission or external email delivery has been made to TOGS Exports. Once authorized by TOGS Exports, this form connects securely to Zoho CRM.",
      preparedZohoPayload: zohoPayload,
      timestamp: new Date().toISOString(),
      referenceId,
    };
  }
}
