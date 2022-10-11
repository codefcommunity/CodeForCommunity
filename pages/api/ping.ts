export default function ping(req, res) {

    res.status(404)
    if (req.method === 'GET') {
        res.status(200).json({
            name: 'Code For Community',
            message: 'pong',
            status: 201,
            timestamp: new Date().toISOString(),
        })
    }
    else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}

