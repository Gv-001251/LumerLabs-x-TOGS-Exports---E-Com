import { EnquiryFormData, ZohoLeadPayload } from "@/types/enquiry";

/**
 * Zoho CRM Integration Adapter
 * 
 * Maps frontend B2B enquiry submissions into the official Zoho CRM REST API v2/v3
 * "Leads" module format.
 * 
 * Note: In a production environment, this transformation is executed inside a secure
 * server-side API Route or Cloud Function to protect Zoho OAuth client secrets.
 */
export class ZohoCrmAdapter {
  /**
   * Transforms validated enquiry data into a Zoho CRM Lead payload
   */
  public static mapToZohoLead(formData: EnquiryFormData): ZohoLeadPayload {
    // Split full name into First and Last name (Zoho requires Last_Name)
    const nameParts = (formData.fullName || "").trim().split(" ");
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : "";
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0] || "Valued Contact";

    // Classify lead source based on product or service
    let inquiryType: ZohoLeadPayload["data"][0]["Inquiry_Type"] = "B2B_Catalogue_Quote";
    if (formData.productOrService?.toLowerCase().includes("oem") || formData.productOrService?.toLowerCase().includes("odm")) {
      inquiryType = "OEM_ODM_Custom";
    } else if (formData.productOrService?.toLowerCase().includes("export") || formData.productOrService?.toLowerCase().includes("logistics")) {
      inquiryType = "Export_Partnership";
    }

    return {
      data: [
        {
          Company: formData.companyName || "Independent Procurement",
          Last_Name: lastName,
          First_Name: firstName,
          Email: formData.businessEmail,
          Phone: formData.phoneNumber || undefined,
          Lead_Source: "TOGS Exports Website Concept (Lumer Labs B2B Portal)",
          Country: formData.country,
          Product_Category_Interest: formData.productOrService,
          Estimated_Order_Volume: formData.estimatedQuantity || "Not Specified",
          Technical_Specifications: formData.requiredSpecifications,
          Inquiry_Type: inquiryType,
          Status: "New_Inquiry",
          Description: [
            `Product/Service of Interest: ${formData.productOrService}`,
            `Estimated Order Volume: ${formData.estimatedQuantity || "N/A"}`,
            `Country of Destination: ${formData.country}`,
            `Technical Requirements:\n${formData.requiredSpecifications}`,
            formData.additionalMessage ? `Additional Message:\n${formData.additionalMessage}` : "",
          ]
            .filter(Boolean)
            .join("\n\n"),
          Tag: ["B2B_Website_Lead", "International_Export", formData.productOrService.replace(/\s+/g, "_")],
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    };
  }

  /**
   * Generates a sample CURL command demonstrating how the backend would transmit this
   * payload securely to Zoho CRM API v2 endpoint using an OAuth Bearer token.
   */
  public static generateSampleCurlCommand(payload: ZohoLeadPayload): string {
    return `curl -X POST "https://www.zohoapis.com/crm/v2/Leads" \\
  -H "Authorization: Zoho-oauthtoken \${ZOHO_ACCESS_TOKEN}" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(payload, null, 2)}'`;
  }
}
