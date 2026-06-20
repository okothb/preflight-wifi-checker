module.exports = async (req, res) => {
    // Set CORS headers so your frontend can communicate cleanly (wildcard Access-Control-Allow-Origin is invalid when credentials is true, so credentials is removed here)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Extract user IP through Serverless edge proxy routing headers
    let userIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (userIp && userIp.includes(',')) {
        userIp = userIp.split(',')[0].trim();
    }
    if (userIp === '::1' || userIp === '127.0.0.1' || !userIp) {
        userIp = '8.8.8.8'; // Robust public fallback for local dev environments
    }

    let status = "SAFE";
    let flags = [];

    // Core Edge Proxy Detection (always runs, free and instant)
    if (req.headers['via'] || req.headers['forwarded']) {
        status = "SUSPICIOUS";
        flags.push("Unexpected routing proxies injected into connection headers.");
    }

    return res.status(200).json({ status, flags, userIp });
};