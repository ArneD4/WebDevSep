const homePage = (req,res) => {
    console.log('you\'re on the home page now')
    res.send('<a href="http://localhost:3000/">Home</a> \n <a href="http://localhost:3000/login">Login</a> \n <a href="http://localhost:3000/register">Register</a>')

}

const loginPage = (req,res) => {
    console.log('you\'re on the login page now')
    res.send('<a href="http://localhost:3000/">Home</a> \n <a href="http://localhost:3000/login">Login</a> \n <a href="http://localhost:3000/register">Register</a>' + `Welcome ${req.body.name}`)
    
}

const registerPage = (req,res) => {
    console.log('you\'re on the register page now')
    res.send('<a href="http://localhost:3000/">Home</a> \n <a href="http://localhost:3000/login">Login</a> \n <a href="http://localhost:3000/register">Register</a>')
}

module.exports = {homePage,loginPage,registerPage}










// const contactPage
// const portfolioPage
// const aboutPage

/*\n \n<label for="uname"><b>Username</b></label><input type="text" placeholder="Enter Username" name="uname" required><label for="psw"><b>Password</b></label><input type="password" placeholder="Enter Password" name="psw" required><button type="submit">Login</button> */