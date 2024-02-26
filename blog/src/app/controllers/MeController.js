const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose.js');
class MeController {

  //[GET] / me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
          .then(courses => res.render('./me/stored-courses', {
            courses: mutipleMongooseToObject(courses) // Đọc dữ liệu từ db
          }))
          .catch(next);
  }

}

module.exports = new MeController();
