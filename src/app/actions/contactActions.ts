'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: FormData) {
  console.log('Début de sendContactEmail');
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter créé');

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Nouveau message de contact',
      text: `
        Nom: ${formData.get('name')}
        Email: ${formData.get('email')}
        Téléphone: ${formData.get('phone')}
        Entreprise: ${formData.get('compagny')}
        Site web actuel: ${formData.get('website')}
        Intérêts: ${formData.get('project')}
        Budget: ${formData.get('budget')}
        Délai: ${formData.get('timeline')}
        Message: ${formData.get('message')}
      `,
    };

    console.log('Options de mail créées:', mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé:', info.response);

    return { success: true, message: 'E-mail envoyé avec succès' };
  } catch (error) {
    console.error('Erreur détaillée dans sendContactEmail:', error);
    if (error instanceof Error) {
      return { success: false, message: `Erreur: ${error.message}` };
    }
    return { success: false, message: 'Une erreur inconnue est survenue' };
  }
}
