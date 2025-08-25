import { useState } from 'react';

const countryData = [
  { code: "+93", country: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", country: "AL", name: "Albania", flag: "🇦🇱" },
  { code: "+213", country: "DZ", name: "Algeria", flag: "🇩🇿" },
  { code: "+1", country: "US", name: "United States", flag: "🇺🇸" },
  { code: "+1", country: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "+44", country: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+33", country: "FR", name: "France", flag: "🇫🇷" },
  { code: "+49", country: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "+39", country: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "+86", country: "CN", name: "China", flag: "🇨🇳" },
  { code: "+81", country: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "+91", country: "IN", name: "India", flag: "🇮🇳" },
  { code: "+92", country: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "+61", country: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "+55", country: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "+27", country: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "+82", country: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "+7", country: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "+20", country: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "+63", country: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "+966", country: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+971", country: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Australia",
  "New Zealand",
  "India",
  "Pakistan",
  "China",
  "Japan",
  "South Korea",
  "Singapore",
  "United Arab Emirates",
  "Saudi Arabia",
  "South Africa",
  "Brazil",
  "Mexico"
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function Leadform() {
  const [formData, setFormData] = useState({
    realtorFirstName: '',
    realtorLastName: '',
    realtorEmail: '',
    countryCode: '+1',
    realtorPhone: '',
    realEstateOfficeName: '',
    accountExecutive: '',
    notes: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
  if (!formData.realtorPhone) {
    alert("Please fill in the Form");
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus("");

  try {
    // ✅ Merge phone with code + format
    const fullPhone = `${formData.countryCode} ${formData.realtorPhone}`;

    // ✅ Build form body with fullPhone included
    const dataToSend = {
      ...formData,
      fullPhone, // send combined phone field
    };

    const formBody = new URLSearchParams(dataToSend).toString();

    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/1982018/338nql7/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      }
    );

    if (response.ok) {
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({
          realtorFirstName: "",
          realtorLastName: "",
          realtorEmail: "",
          countryCode: "+1",
          realtorPhone: "",
          realEstateOfficeName: "",
          accountExecutive: "",
          notes: "",
          streetAddress: "",
          addressLine2: "",
          city: "",
          state: "",
          postalCode: "",
          country: "United States",
        });
        setSubmitStatus("");
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Submit error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      padding: '2rem 1rem',
    },
    formWrapper: {
      maxWidth: '768px',
      margin: '0 auto',
    },
    formCard: {
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '2rem',
      border: 'none',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem',
    },
    underline: {
      height: '4px',
      width: '96px',
      background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
      borderRadius: '2px',
      margin: '0 auto',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    inputFocus: {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      backgroundColor: 'white',
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
      backgroundPosition: 'right 12px center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px',
      paddingRight: '40px',
      appearance: 'none',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
    row3: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
    },
    phoneGroup: {
      display: 'flex',
    },
    countrySelect: {
      maxWidth: '120px',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      backgroundColor: '#f9fafb',
      borderRight: 'none',
    },
    phoneInput: {
      flex: '1',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      fontFamily: 'inherit',
      backgroundColor: 'white',
      resize: 'vertical',
      minHeight: '100px',
    },
    button: {
      width: '100%',
      padding: '16px 24px',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      color: 'white',
    },
    buttonNormal: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
    },
    buttonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
    },
    buttonSuccess: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
    },
    buttonError: {
      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      boxShadow: '0 4px 14px 0 rgba(239, 68, 68, 0.3)',
    },
    buttonDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed',
      transform: 'none',
      background: 'black',
    },
    spinner: {
      width: '16px',
      height: '16px',
      border: '2px solid transparent',
      borderTop: '2px solid white',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    required: {
      color: '#ef4444',
    },
  };

  const css = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr !important;
      }
      .form-row-3 {
        grid-template-columns: 1fr !important;
      }
      .form-card {
        padding: 1.5rem !important;
        border-radius: 16px !important;
      }
      .title {
        font-size: 1.5rem !important;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <div style={styles.formCard} className="form-card">
            <div style={styles.header}>
              <h1 style={styles.title} className="title">
                <img src="logo.png" alt="" />
              </h1>
              <div style={styles.underline}></div>
            </div>

            <div>
              {/* Realtor Information */}
              <div style={styles.row} className="form-row">
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Realtor's First Name
                  </label>
                  <input
                    type="text"
                    name="realtorFirstName"
                    value={formData.realtorFirstName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Realtor's Last Name
                  </label>
                  <input
                    type="text"
                    name="realtorLastName"
                    required
                    value={formData.realtorLastName}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                </div>
              </div>

              {/* Realtor Email */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Realtor's Email
                </label>
                <input
                  type="email"
                  name="realtorEmail"
                  value={formData.realtorEmail}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  required
                />
              </div>

              {/* Realtor Phone */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Phone <span style={styles.required}>*</span>
                </label>
                <div style={styles.phoneGroup}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    style={{ ...styles.select, ...styles.countrySelect }}
                  >
                    {countryData.map((country) => (
                      <option key={country.country} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="realtorPhone"
                    value={formData.realtorPhone}
                    onChange={handleInputChange}
                    placeholder="1234-567-890"
                    style={{ ...styles.input, ...styles.phoneInput }}
                    onFocus={(e) => Object.assign(e.target.style, { ...styles.input, ...styles.phoneInput, ...styles.inputFocus })}
                    onBlur={(e) => Object.assign(e.target.style, { ...styles.input, ...styles.phoneInput })}
                    required
                  />
                </div>
              </div>

              {/* Real Estate Office Name */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Real Estate Office Name
                </label>
                <input
                  type="text"
                  name="realEstateOfficeName"
                  value={formData.realEstateOfficeName}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                />
              </div>

              {/* Account Executive */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Account Executive
                </label>
                <select
                  name="accountExecutive"
                  value={formData.accountExecutive}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">-- Select --</option>
                  <option value="Carlos Jimenez">Carlos Jimenez</option>
                  <option value="Ivan Duarte">Ivan Duarte</option>
                  <option value="Patrick Fleming">Patrick Fleming</option>
                  <option value="Christopher Mullen">Christopher Mullen</option>
                  <option value="Yauvan Kumar">Yauvan Kumar</option>
                </select>
              </div>

              {/* Address Section */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  style={styles.input}
                  onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                />
              </div>

              <div style={styles.row3} className="form-row-3">
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    State / Province / Region
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    style={styles.select}
                  >
                    <option value="">-- Select State --</option>
                    {usStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Postal / Zip Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    style={styles.input}
                    onFocus={(e) => Object.assign(e.target.style, styles.inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Notes (Tell the story):
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Share any additional details about this lead..."
                  style={styles.textarea}
                  onFocus={(e) => Object.assign(e.target.style, { ...styles.textarea, ...styles.inputFocus })}
                  onBlur={(e) => Object.assign(e.target.style, styles.textarea)}
                />
              </div>

              {/* Submit Button */}
              <div style={{ paddingTop: '1rem' }}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    ...styles.button,
                    ...(isSubmitting
                      ? styles.buttonDisabled
                      : submitStatus === 'success'
                        ? styles.buttonSuccess
                        : submitStatus === 'error'
                          ? styles.buttonError
                          : styles.buttonNormal
                    )
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      Object.assign(e.target.style, styles.buttonHover);
                    }
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, {
                      transform: 'translateY(0px)',
                      boxShadow: submitStatus === 'success'
                        ? styles.buttonSuccess.boxShadow
                        : submitStatus === 'error'
                          ? styles.buttonError.boxShadow
                          : styles.buttonNormal.boxShadow
                    });
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={styles.spinner}></div>
                      Submitting...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Success! Done
                    </>
                  ) : submitStatus === 'error' ? (
                    'Error - Try Again'
                  ) : (
                    'Submit Lead'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadform;