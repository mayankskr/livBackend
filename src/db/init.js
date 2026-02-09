import connectionDB from "./connectionDB.js";
import Content from "../models/siteContent.model.js";

async function initContent() {
  try {
    // Connect to database
    await connectionDB();

    // Check if content already exists
    const exists = await Content.countDocuments({});
    if (exists > 0) {
      console.log("Content already initialized.");
      return;
    }

    // Insert default content
    await Content.create({
      headerPhoneButton: "+91-9311900247",
      heroHeading: "अफ्रीकन मुलोंडो की शक्ति के साथ रात को थकना मना है।",
      heroPara: "रोज़ महसूस करें जवानी वाले दिन।",
      infoHeading: "सिर्फ चुनिंदा पुरुषों के लिए - Limited Edition Formula.",
      infoPara: "बिना थके बने रहे पावर टॉनिक से अफ्रीकन पुरुषों जैसी पावर पाए",
      infoPoint1: "ये एक प्रीमियम पावर टॉनिक है।",
      infoPoint2: "जो खास उन पुरुषों के लिए बनाया गया है।",
      infoPoint3: "जो extra strength + stamina चाहते हैं।",
      infoPhoneButton: "जल्द बुक करें +91-9311900247",
      ingredientsHeading: "अफ्रीकन मुलोंडो की शक्ति के साथ रात को थकना मना है।",
      ingredientsPoint1: "अफ्रीकन मुलोंडो",
      ingredientsPoint2: "अश्वगंधा",
      ingredientsPoint3: "गोक्षुरा",
      ingredientsPoint4: "शतावरी जैसी जड़ी-बूटियों के लाभ पाने के लिए",
      ingredientsPhoneButton: "जल्द बुक करें +91-9311900247"
    });

    console.log("Content initialized.");
  } catch (err) {
    console.error("Initialization error:", err);
    process.exit(1);
  }
  finally{
    process.exit(0)
  }
}

initContent();