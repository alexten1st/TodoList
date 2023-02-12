module.exports = (req, res, next)=> {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            res.status(403).json({ message: "Пользователь не авторизован" });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong" });
    }
}