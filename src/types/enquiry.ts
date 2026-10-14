export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber?: string;
  country: string;
  productOrService: string;
  estimatedQuantity?: string;
  requiredSpecifications: string;
  additionalMessage?: string;
  privacyConsent: boolean;
}

export interface ZohoLeadPayload {
  data: Array<{
    Company: string;
    Last_Name: string;
    First_Name: string;
    Email: string;
    Phone?: string;
    Lead_Source: string;
    Description: string;
    Country: string;
    Product_Category_Interest?: string;
    Estimated_Order_Volume?: string;
    Technical_Specifications?: string;
    Inquiry_Type: "B2B_Catalogue_Quote" | "OEM_ODM_Custom" | "Export_Partnership" | "General_Inquiry";
    Status: "New_Inquiry";
    Tag?: string[];
  }>;
  trigger?: string[];
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  demonstrationNotice: string;
  preparedZohoPayload?: ZohoLeadPayload;
  timestamp: string;
  referenceId: string;
}
