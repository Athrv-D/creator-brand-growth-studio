
import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";

export const Route = createFileRoute("/api/notify-demo")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, content_category, website_for } =
            await request.json();

          if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof content_category !== "string" ||
            !["business", "personal_brand"].includes(website_for)
          ) {
            return Response.json(
              { error: "Invalid request data" },
              { status: 400 }
            );
          }

          const apiKey = env.RESEND_API_KEY;

          if (!apiKey) {
            return Response.json(
              { error: "Email service is not configured" },
              { status: 500 }
            );
          }

          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Website Leads <onboarding@resend.dev>",
              to: ["rebelroyus@gmail.com"],
              subject: "New Website Demo Request",
              html: `
                <h2>New Demo Request</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Category:</strong> ${escapeHtml(content_category)}</p>
                <p><strong>Website for:</strong> ${escapeHtml(website_for)}</p>
              `,
            }),
          });

          if (!response.ok) {
            console.error("Resend API error:", await response.text());
            return Response.json(
              { error: "Email could not be sent" },
              { status: 502 }
            );
          }

          return Response.json({ success: true });
        } catch (error) {
          console.error("Notification error:", error);
          return Response.json(
            { error: "Notification failed" },
            { status: 500 }
          );
        }
      },
    },
  },
});

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}
