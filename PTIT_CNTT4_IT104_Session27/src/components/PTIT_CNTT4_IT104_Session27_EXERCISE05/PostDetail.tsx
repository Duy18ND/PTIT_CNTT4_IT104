import { useParams } from "react-router-dom";
import { posts } from "./Data05";

export default function PostDetail() {
  const { id } = useParams();
  const postId = Number(id);

  const post = posts.find((p) => p.id === postId);

  if (!id || isNaN(postId) || !post) {
    return (
      <h2 className="text-center text-red-500 mt-6">
        Không tìm thấy bài viết!
      </h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
