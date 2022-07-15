import db from "../models/index-model";

const getHomePage = async ( req, res ) => {
  try {
    const data = await db.users.findAll();
    
    return res.render('homePage.ejs', {
      data: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getHomePage,
};