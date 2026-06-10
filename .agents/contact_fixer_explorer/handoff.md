# Contact Form Integrity Fix Strategy

## 1. Observation
In `components/sections/ContactSalesFormSection.tsx` (lines 11-15), the `handleSubmit` function currently uses a facade implementation:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Simulate submission
  setTimeout(() => setIsSubmitted(true), 1000);
};
```
The form inputs (`firstName`, `lastName`, `company`, `email`, `inquiryType`, and `message`) are not captured from the DOM, and no real data transmission occurs.

## 2. Logic Chain
1. The project operates under an integrity mode that prohibits dummy/facade implementations.
2. The current `handleSubmit` discards user input and fakes a success state, which meets the definition of a facade and violates integrity requirements.
3. Since a backend API is neither requested nor available for this specific project iteration, utilizing the native `mailto:` protocol is a valid, genuine alternative for data transmission.
4. By extracting the values from the form inputs and constructing a `mailto:` link, the application will securely route the data to an email client, fulfilling the requirement for genuine logic implementation.

## 3. Caveats
- Relying on `mailto:` means the user experience shifts slightly—opening their local email client rather than submitting silently in the background. However, this is acceptable and far preferable to silently dropping user data in a "development" integrity mode. 
- The success state `setIsSubmitted(true)` can still be triggered immediately after launching the `mailto:` link so the UI still responds to the user.

## 4. Conclusion
Replace the `setTimeout` facade with a real implementation that constructs a `mailto:` link.

**Proposed Implementation Strategy for the Implementer:**
1. Update the form elements to either use controlled React state or use `FormData` in the `handleSubmit` function to capture values.
2. Rewrite `handleSubmit` to build a subject and body string based on the captured data.
3. Execute `window.location.href = mailto:contact@k-aqua.com?subject=...&body=...` to transmit the data.
4. Retain the `setIsSubmitted(true)` state update after triggering the `mailto:` link to provide user feedback.

Example code snippet for the implementer:
```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const formData = new FormData(e.currentTarget);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const company = formData.get('company');
  const email = formData.get('email');
  const inquiryType = formData.get('inquiryType');
  const message = formData.get('message');

  const subject = encodeURIComponent(`K-Aqua Inquiry: ${inquiryType} from ${company}`);
  const body = encodeURIComponent(`
Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}
Inquiry Type: ${inquiryType}

Message:
${message}
  `);

  window.location.href = \`mailto:sales@k-aqua.com?subject=\${subject}&body=\${body}\`;
  
  setIsSubmitted(true);
};
```
*(Make sure to add the `name` attribute to all input, select, and textarea fields in the form to make `FormData` work).*

## 5. Verification Method
- **Code Inspection:** Verify that `ContactSalesFormSection.tsx` no longer relies exclusively on `setTimeout` to handle submissions and instead reads input values to trigger a real `mailto:` action.
- **Manual Testing:** Run the project, fill out the Contact Sales Form, and click "Transmit Request". The system's default email client should open with a pre-populated email containing all the form data, and the webpage should display the "Transmission Secured" success screen.
