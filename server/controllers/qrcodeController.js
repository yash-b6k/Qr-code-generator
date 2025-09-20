import QRCode from "qrcode";

export const generateQrCode = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    // Generate QR code as a Base64 Data URL
    const qr = await QRCode.toDataURL(text);
    res.json({ qr });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error generating QR code" });
  }
};
