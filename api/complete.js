export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  // 테스트넷: 완료 처리했다고 응답
  res.status(200).json({ completed: true });
}
