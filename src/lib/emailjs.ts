import emailjs from '@emailjs/browser';

// Configuración de EmailJS
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Debug: Verificar que las variables de entorno se cargaron
console.log('EmailJS Config:', {
  serviceId: EMAILJS_CONFIG.serviceId,
  templateId: EMAILJS_CONFIG.templateId,
  publicKey: EMAILJS_CONFIG.publicKey ? '✓ Configurada' : '✗ Falta',
  publicKeyLength: EMAILJS_CONFIG.publicKey?.length
});

// Validar que las credenciales existen
if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
  console.error('❌ Error: Faltan credenciales de EmailJS en el archivo .env');
  console.error('Asegúrate de tener configurado:');
  console.error('- VITE_EMAILJS_SERVICE_ID');
  console.error('- VITE_EMAILJS_TEMPLATE_ID');
  console.error('- VITE_EMAILJS_PUBLIC_KEY');
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  privacy: boolean;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Preparar datos del template
    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: 'BlanckWeb',
      to_email: 'info@blanckweb.eu',
      reply_to: formData.email,
      // Información adicional
      subject: `Nueva solicitud de presupuesto - ${formData.budget}`,
      date: new Date().toLocaleDateString('es-ES'),
      time: new Date().toLocaleTimeString('es-ES')
    };

    console.log('Enviando email con datos:', templateParams);
    console.log('Usando Service ID:', EMAILJS_CONFIG.serviceId);
    console.log('Usando Template ID:', EMAILJS_CONFIG.templateId);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey // ← Agregar la publicKey como 4to parámetro
    );

    console.log('✅ Email enviado exitosamente:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error al enviar email:', error);
    return false;
  }
};

export const sendAutoReply = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Template para respuesta automática al cliente
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'BlanckWeb',
      from_email: 'info@blanckweb.eu',
      subject: 'Hemos recibido tu solicitud - BlanckWeb',
      message: `Hola ${formData.name},

¡Gracias por contactar con BlanckWeb!

Hemos recibido tu solicitud de presupuesto para: ${formData.budget}

Te responderemos en un máximo de 24 horas con una propuesta personalizada.

Mientras tanto, puedes contactarnos directamente:
📧 info@blanckweb.eu  
📱 +34 642 168 097

¡Gracias por confiar en nosotros!

El equipo de BlanckWeb`
    };

    // Necesitarás crear un template separado para esto
    const autoReplyResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      'template_autoreply', // Template separado para respuesta automática
      autoReplyParams
    );

    return autoReplyResponse.status === 200;
  } catch (error) {
    console.error('Error al enviar respuesta automática:', error);
    return false;
  }
};