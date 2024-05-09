import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

//CONTROLADOR PARA ENVIAR CORREOS CON RESEND
export const enviarCorreo = async (req, res) => {
    const { nombre, apellido, mensaje, email } = req.body;
    try {
        const { data, error } = await resend.emails.send({
            from: "Cliente <boulevard-messages@resend.dev>",
            to: ["zanlorenzocacho10@gmail.com"],
            subject: "Consulta",
            html: `<html>
            <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
  </head>
            <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:100%;margin:0 auto;padding:20px 0 48px;width:580px">
            <tbody>
              <tr style="width:100%">
                <td>
                  <p style="font-size:32px;line-height:1.3;margin:16px 0;font-weight:700;color:#484848;text-align:center">Boulevard Sur</p>
                  <p style="font-size:14px;line-height:1.4;margin:16px 0;color:#484848;padding:24px;background-color:#f2f3f3;border-radius:4px">${mensaje}</p>
                  <p style="font-size:14px;line-height:24px;margin:16px 0">Saludos cordiales,<br /><span style="font-weight:bold">${nombre} ${apellido}</span></p>
                  <p style="font-size:14px;line-height:24px;margin:16px 0">enviado por: ${email}</p>
                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea" />
                  <p style="font-size:14px;line-height:24px;margin:16px 0;color:#9ca299;margin-bottom:10px;text-align:center">Desarrollado por <span style="font-weight:bold">Koi web studio</span> | © 2024</p>
                </td>
              </tr>
            </tbody>
          </table>
            </body>
        </html>`,
        });

        if (error) {
            return res
                .status(400)
                .json({ message: "error al enviar el correo", error });
        }

        res.status(200).json({ message: "correo enviado", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

//CONTROLADOR PARA ENVIAR CORREOS CON NODEMAILER
export const sendEmail = async (req, res) => {
    try {
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "Error al tratar de enviar el correo",
            error,
        });
    }
};
