export interface FormspreeResponse {
  ok: boolean;
  next: string;
}

export interface FormSubmitError {
  type: 'network' | 'validation' | 'server' | 'ratelimit';
  message: string;
}

export async function submitToFormspree(
  formId: string,
  data: Record<string, any>
): Promise<{ success: boolean; error?: FormSubmitError }> {
  const endpoint = `https://formspree.io/f/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 429) {
      return {
        success: false,
        error: {
          type: 'ratelimit',
          message: 'Zu viele Anfragen. Bitte warten Sie ein paar Minuten.',
        },
      };
    }

    if (!response.ok) {
      return {
        success: false,
        error: {
          type: 'server',
          message: 'Fehler beim Absenden. Bitte versuchen Sie später erneut.',
        },
      };
    }

    const json: FormspreeResponse = await response.json();
    return { success: json.ok };
  } catch (err) {
    return {
      success: false,
      error: {
        type: 'network',
        message: 'Netzwerkfehler. Überprüfen Sie Ihre Internetverbindung.',
      },
    };
  }
}
