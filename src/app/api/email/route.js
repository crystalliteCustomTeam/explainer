import { NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
    try {
        const { name, phone, email, message, IP, currentdate, pageUrl } = await request.json();
        const brandname = 'Explainer Videos LLC'
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "aziz.rehman@productions-dev.com",
                pass: "ctfhepafurmhrnmt"
            }
        });
        const mailOptions = {
            from: "leads@infinityanimations.com",
            to: ['queries@infinityanimations.com', 'queries@explainervideosllc.com'],
            subject: `Explainer Videos LLC Lead`,
            html: `
            <table>
              <tr>
                        <th>Name</th>
                        <td>${name}</td>
                    </tr> 
                    <tr>
                        <th>Phone</th>
                        <td>${phone}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>${email}</td>
                    </tr>
                
                    <tr>
                        <th>Message</th>
                        <td>${message}</td>
                    </tr>

                    <tr>
                        <th>Brand Name</th>
                        <td>${brandname}</td>
                    </tr>

                    <tr>
                        <th>Currentdate</th>
                        <td>${currentdate}</td>
                    </tr>

                    <tr>
                        <th>IP</th>
                        <td>${IP}</td>
                    </tr>
               
                    <tr>
                        <th>pageUrl</th>
                        <td>${pageUrl}</td>
                    </tr>
            </table>`
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 })
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 })
    }
}