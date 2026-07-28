import jwt from 'jsonwebtoken';

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }

    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token is missing"
        });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        req.token = token;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default requireAuth;