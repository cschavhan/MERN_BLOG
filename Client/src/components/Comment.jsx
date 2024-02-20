import { useEffect, useState } from "react";
import moment from "moment";

function Comment({ comment }) {
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold mr-1 truncate text-xs">
            {user ? `@${user.username}` : "anonymous user"}
          </span>
          <span className="text-gray-500 text-xs">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>

        <p className="text-gray-500 mb-2">{comment.content}</p>
      </div>
    </div>
  );
}

export default Comment;
