
const logoutController = (req, res) => {
    res.clearCookie("access_token").redirect("/");
}
module.exports = logoutController;