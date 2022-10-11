// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name } = req.query
  res.status(200)
  res.json(
    {
      name,
      message: 'Hello ' + name,
      requestedAt: new Date().toISOString(),
      servedBy: process.env.HOSTNAME

    }
  )
}
