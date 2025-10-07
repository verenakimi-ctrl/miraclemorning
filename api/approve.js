export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  // 테스트넷: 특별한 검증 없이 승인했다고 응답
  res.status(200).json({ approved: true });
}
