import Post from "../models/Post.js";


// ========================
// CREATE POST
// ========================
export const createPost = async (req, res) => {
  try {
    const { text, imageUrl } = req.body;

    if (!text?.trim() && !imageUrl) {
      return res.status(400).json({
        message: "Post must contain text or image",
      });
    }

    const post = await Post.create({
      userId: req.user._id,
      username: req.user.username,
      text,
      imageUrl,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating post",
    });
  }
};


// ========================
// GET ALL POSTS (FEED)
// ========================
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching posts",
    });
  }
};

// ========================
// LIKE / UNLIKE POST
// ========================
export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const userId = req.user._id;

    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      post.likes.pull(userId);
    } else {
      // Like
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({
      message: "Error updating like",
    });
  }
};

// ========================
// COMMENT ON POST
// ========================
export const commentPost = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({
        message: "Comment cannot be empty",
      });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    post.comments.push({
      userId: req.user._id,
      username: req.user.username,
      text,
    });

    await post.save();

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({
      message: "Error adding comment",
    });
  }
};
