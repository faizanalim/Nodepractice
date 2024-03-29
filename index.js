const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/playground')
.then(()=> console.log("Connected to DB..."))
.catch(err => console.log("Could not connected",err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [ String ],
    date: Date, 
    isPublished: Boolean,
    price: Number
  });
  
  const Course = mongoose.model('Course', courseSchema);
  
  async function getCourses() {
    return await Course
    .find({ isPublished: true, tags: 'backend' })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  }
  
  async function run() {
    const courses = await getCourses();
    console.log(courses);
  }
  
  run();