import { Elysia } from "elysia";
import { poolConnection, db } from "./db";
import { users } from "./db/schema";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to ElysiaJS + Drizzle ORM + MySQL API",
    status: "ok",
    timestamp: new Date().toISOString(),
  }))
  .get("/health", async () => {
    let databaseStatus = "disconnected";
    try {
      const [result] = await poolConnection.query("SELECT 1 as ping");
      if (Array.isArray(result) && result.length > 0) {
        databaseStatus = "connected";
      }
    } catch (error) {
      databaseStatus = `error: ${error instanceof Error ? error.message : "Unknown error"}`;
    }

    return {
      status: "healthy",
      database: databaseStatus,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  })
  .group("/users", (app) =>
    app
      .get("/", async () => {
        try {
          const allUsers = await db.select().from(users);
          return { success: true, data: allUsers };
        } catch (error) {
          return {
            success: false,
            message: error instanceof Error ? error.message : "Database error",
          };
        }
      })
  )
  .listen(port);

console.log(
  `🚀 Server is running at http://${app.server?.hostname}:${app.server?.port}`
);
