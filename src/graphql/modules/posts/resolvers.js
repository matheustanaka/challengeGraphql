import Post from "../../../models/Post";
import User from "../../../models/User";

export default {
  Post: {
    author: (post) => User.findById(post.author),
  },
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findByIdAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
  },
};
