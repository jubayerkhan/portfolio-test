export default function handler(req, res) {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({
      success: true,
    });
  }

  return res.status(401).json({
    success: false,
  });
}