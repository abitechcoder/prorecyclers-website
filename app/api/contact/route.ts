import { type NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactFormData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Basic validation
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
    }

    const result = await sendContactEmail(body)

    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
