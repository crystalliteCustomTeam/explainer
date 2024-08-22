import { NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
    try {
        const { name, email, phone, message, pageURL } = await request.json();
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "harrykennedy.cs@gmail.com",
                pass: "10@Kskwoks"
            }
        });
        const mailOptions = {
            from: "harrykennedy.cs@gmail.com",
            to: "harrykennedy.cs@gmail.com",
            subject: `Cloud Studios Inc Lead`,
            html: `
            <table>
                <tr>
                    <th>Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>${message}</td>
                </tr>
                <tr>
                    <th>pageURL</th>
                    <td>${pageURL}</td>
                </tr>
            </table>`
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 })
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 })
    }
}