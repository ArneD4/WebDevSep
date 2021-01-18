// homepage controller

const homepageController = (req,res)=>{
    res.send('Homepage')
}

//api cotnroller

const apiController = (req,res)=>{
    res.json({
        id:1
    })
}

module.exports = {homepageController,apiController}