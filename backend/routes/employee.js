const express = require("express");
const Employee = require("../models/employee");

const router = express.Router();

//save data
router.post("/employee/save", (req, res) => {
  let newPost = new Employee(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: "Details Added Successfully",
    });
  });
});

//get data
router.get("/employees", (req, res) => {
    Employee.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//get a specific data
router.get("/employee/:id", (req, res) => {
  let postId = req.params.id;

  Employee.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//update data
router.put("/employee/update/:id", (req, res) => {
    Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});

//delete data
router.delete("/employee/delete/:id", (req, res) => {
    Employee.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccesfull",
        err,
      });
    return res.json({
      message: "Delete Successfull",
      deletedpost,
    });
  });
});

module.exports = router;
