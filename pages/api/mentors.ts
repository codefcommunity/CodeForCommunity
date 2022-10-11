export default function ping(req, res) {

    res.status(200)
    res.end(
        JSON.stringify({
            name: 'Code For Community',
            message: 'pong',
            mentor: "Abhishek Kushwaha"
        }
        ))


}

