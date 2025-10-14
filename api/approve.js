export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { paymentId } = req.body;
    if (!paymentId) {
      return res.status(400).json({ error: "Missing paymentId" });
    }

    // 테스트넷: 검증 없이 승인
    console.log("Approved payment:", paymentId); // 디버깅용 로그
    res.status(200).json({ approved: true, paymentId });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
