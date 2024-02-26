const Course = require('../models/Course.js');
const {mutipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');
const { param } = require('../../routes/news.js');
class CourseController {
  // courses/slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug }) // Đọc dữ liệu từ database
        .then((course) => {
            res.render('courses/show', {course : mongooseToObject(course)});
  })
        .catch(next);
  }
  //[GET] /courses/create
  // create xong ấn vào nút thêm thì nó sẽ thực hiện hàm store
  create(req, res, next){
    res.render('courses/create');
  }
  //[POST]/courses/store
  //Lưu vào trong db
  store(req, res, next){
    req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save()
    .then(() => res.redirect('/'))
    .catch(error =>{

    });
  }
  //[GET] /course/:id/edit 
  // Ấn xong thực hiện hàm update
  edit(req, res, next){
    Course.findById(req.params.id)
          .then(course => res.render('courses/edit', {
              course: mongooseToObject(course)
          }))
          .catch(next);
  }
//[PUT] /course/:id
//Chỉnh sửa trong db
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
  }
}

module.exports = new CourseController();
