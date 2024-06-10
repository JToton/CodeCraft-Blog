const { Post } = require("../models");

exports.getHomePage = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: ["user"],
    });
    console.log("Retrieved posts:", posts); // Add this line to debug
    res.render("home", { posts });
  } catch (error) {
    console.error(error);
    res.render("home", { error: "An error occurred" });
  }
};
