import dotenv from "dotenv";
import app from "./app.js";
import connectionDB from "./db/connectionDB.js";
import contentRoutes from "./routes/content.route.js";
import queryRoutes from "./routes/query.route.js";
// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

/* ===============================
   Routes
   (Defining routes here or in app.js is fine, 
   but app.js is usually preferred for logic)
================================ */
app.use("/api/content", contentRoutes);
app.use("/api/query", queryRoutes);
/* ===============================
   Server Start
================================ */
async function startServer() {
  try {
    // 1. Connect to Database
    await connectionDB();

    // 2. Start Listening
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
}

startServer();
