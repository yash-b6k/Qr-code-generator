import { Link } from "react-router-dom"; // for homepage navigation

function Privacy() {
  return (
    <div className="max-w-5xl mx-auto p-6 font-inter text-gray-800 leading-relaxed">

      {/* Logo at top linking to homepage */}
      <div className="flex justify-center mb-6">
        <Link to="/">
          <img
            src="/assets/Logo.png" // replace with your logo path
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
      {/* Last updated centered */}
      <p className="text-sm text-gray-500 text-center mb-6">Last updated: September, 2025</p>

      <p className="mb-4">
        This privacy notice for <strong>QR Generator.ig</strong> ("Company," "we," "us," or "our") 
        describes how and why we collect, store, use, and/or share ("process") your information under
        Indian law when you use our services ("Services"), such as when you:
      </p>

      <p className="mb-4">
        We act as the Data Fiduciary, responsible for collecting, processing, and storing 
        your personal data as per the Digital Personal Data Protection Act, 2023 (DPDP Act), 
        the Information Technology Act, 2000 (as amended), and other applicable Indian data protection laws.
      </p>

      <p className="mb-4">
        Visit our website at{" "}
        <a
          href="https://qr-generator.ig/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://qr-generator.ig/
        </a>
      </p>

      <p className="mb-6">
        You may access our website without providing personal information. To register or 
        use our paid plans, personal information will be required in accordance with applicable law.
      </p>

      <p className="mb-6">
        Questions or concerns? This privacy notice explains your rights and choices under 
        Indian law. If you do not agree with our policies, please do not use our Services. 
        For further questions, contact our Grievance Officer at{" "}
        <a
          href="mailto:XYZ@joy.ig"
          className="text-blue-600 underline"
        >
          XYZ@joy.ig
        </a>
        .
      </p>

      {/* Sections */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
      <p className="mb-4">
        <strong>In Short:</strong> We collect personal information provided by you, as required under the DPDP Act and IT Rules.
      </p>
      <p className="mb-4">
        This includes information given when registering, requesting details about services, 
        making payments, or contacting us.
      </p>
      <p className="mb-4">
        <strong>Categories of Data Collected:</strong> Name, contact details, login IDs, payment details 
        (processed by our partner and not stored by us), and any other information as allowed by law. 
        Sensitive personal data is handled only as per Indian law and with explicit consent when applicable.
      </p>
      <p className="mb-4">
        <strong>Payment Data:</strong> Payments are processed by our Indian-compliant payment providers 
        (e.g., Razorpay, Stripe India). Their privacy terms apply.
      </p>
      <p className="mb-6">
        <strong>Social Media Login Data:</strong> If signing up using Google, we collect only basic profile data as permitted by you.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
      <p className="mb-6">
        <strong>In Short:</strong> We use your information to provide, improve, and manage our Services under 
        the lawful bases set out in the DPDP Act, including your consent, for service delivery, legal compliance, security, 
        and with your right to withdraw consent at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. WHAT ARE YOUR RIGHTS UNDER INDIAN LAW?</h2>
      <p className="mb-6">
        Under the DPDP Act, you have the right to:
        <ul className="ml-6 list-disc">
          <li>Access your personal data held by us</li>
          <li>Request correction or erasure of your data</li>
          <li>Withdraw consent at any time (as easily as you gave it)</li>
          <li>Limit or object to certain processing</li>
          <li>Register a grievance with our Grievance Officer</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. GRIEVANCE REDRESSAL & COMPLAINTS</h2>
      <p className="mb-4">
        In compliance with Section 13 of the IT Rules and the DPDP Act, our Grievance Officer can be contacted at: 
        <a
          href="mailto:XYZ@joy.ig"
          className="text-blue-600 underline"
        >
          XYZ@joy.ig
        </a>
        . Complaints must be acknowledged within 24 hours and resolved within 15 days, as per law.
      </p>
      <p className="mb-6">
        If your complaint is not satisfactorily resolved, you may escalate to the Data Protection Board of India (DPBI) 
        or the Central Consumer Protection Authority (CCPA).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. COOKIES & SIMILAR TECHNOLOGIES</h2>
      <p className="mb-6">
        We use cookies for website functionality, analytics, and improving user experience as per the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. By continuing, you consent to our cookie policy. Control your cookie preferences in your browser or on our site.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. INFORMATION FROM MINORS</h2>
      <p className="mb-6">
        We do not knowingly collect data from children under 18 years of age. 
        Parental consent is required for those under 18 as per Indian law. 
        If you believe we have collected data from a minor without consent, contact us for prompt deletion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. DATA RETENTION & SECURITY</h2>
      <p className="mb-6">
        We retain personal information only as long as needed to fulfill stated purposes, or as required by Indian law. 
        Reasonable security practices are implemented under Section 43A of the IT Act, 2000. No online platform can guarantee absolute safety, but we take every step feasible to protect your data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. UPDATES TO THIS PRIVACY POLICY</h2>
      <p className="mb-6">
        This policy may change to comply with evolving Indian laws. Changes will be posted here with the updated date. 
        We encourage periodic review of this page.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">9. JURISDICTION</h2>
      <p className="mb-6">
        This policy is governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in India.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">COOKIE POLICY</h2>
      <p className="text-sm text-gray-500 mb-6 ">Last updated: September, 2025</p>
      <p className="mb-6">
        We use essential and non-essential cookies, in compliance with the DPDP Act and IT Rules. Adjust your cookie preferences at any time. For more details, refer to our full Cookie Policy.
      </p>

      <p className="text-xs text-gray-500 mt-12 ">
        © 2025 - QR Generator.ig <br />
        ‘QR Generator’ is a trademark of DENSO WAVE INCORPORATED
      </p>

    </div>
  );
}

export default Privacy;
