"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

export async function submitFeedback(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic server-side validation
  if (!name || !email || !message) {
    return { success: false, message: "Paki-fill up lahat ng fields." };
  }

  const newFeedback = {
    id: Date.now().toString(),
    name,
    email,
    message,
    createdAt: new Date().toLocaleString(),
  };

  try {
    const dataDirectory = path.join(process.cwd(), "data");
    const filePath = path.join(dataDirectory, "feedbacks.json");

    // 1. Siguraduhin na exist ang 'data' folder
    await fs.mkdir(dataDirectory, { recursive: true });

    // 2. Basahin ang existing feedbacks (kung meron na)
    let feedbacks = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      feedbacks = JSON.parse(fileContent);
    } catch (err) {
      // Okay lang kung wala pang file, start tayo sa empty array
    }

    // 3. I-add ang bago at i-save
    feedbacks.push(newFeedback);
    await fs.writeFile(filePath, JSON.stringify(feedbacks, null, 2), "utf8");

    return { success: true, message: "thank you your feedback is sucessfully submit" };
  } catch (error) {
    console.error("Failed to save feedback:", error);
    return { success: false, message: "May problema sa pag-save. Pakisubukan muli." };
  }
}