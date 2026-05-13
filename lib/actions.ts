"use server";

export async function submitFeedback(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    return { success: false, message: "Paki-fill up lahat ng fields." };
  }

  try {
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

    if (!DISCORD_WEBHOOK_URL) {
      console.error("Missing DISCORD_WEBHOOK_URL environment variable.");
      throw new Error("No storage configured for feedback.");
    }

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "New Portfolio Feedback",
          color: 0xc8fb57, // Matching your accent color
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Message", value: message }
          ],
          timestamp: new Date().toISOString(),
        }]
      }),
    });
    
    return { success: true, message: "Thank you! Your feedback has been successfully submitted." };
  } catch (error) {
    console.error("Failed to save feedback:", error);
    return { success: false, message: "May problema sa pag-save. Pakisubukan muli." };
  }
}