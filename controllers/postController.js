const { Post, Comment } = require("../models");

exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID and include associated comments and user
    const post = await Post.findByPk(postId, {
      include: [
        {
          model: Comment,
          include: ["user"],
        },
        "user",
      ],
    });

    if (!post) {
      return res.status(404).render("404");
    }

    // Render the post view with the post and its comments
    res.render("post", { post });
  } catch (error) {
    console.error(error);
    res.render("post", { error: "An error occurred" });
  }
};

exports.createComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;

    // Create a new comment in the database
    await Comment.create({
      content,
      userId: req.session.userId,
      postId,
    });

    // Redirect back to the post page
    res.redirect(`/posts/${postId}`);
  } catch (error) {
    console.error(error);
    res.render("post", { error: "An error occurred" });
  }
};
