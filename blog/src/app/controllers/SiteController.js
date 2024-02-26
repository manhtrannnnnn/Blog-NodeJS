const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose.js');
class SiteController {

  //[GET] / home
  async home(req, res, next) { // Phiên bản khác không dùng callback được
    Course.find({})// chọc vào model để lấy dữ liệu
      .then(courses => {
          res.render('home', {
            courses: mutipleMongooseToObject(courses),
          });
      })
      .catch(next);
  }

  //[GET] / search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
