import { useState } from "react";

function PostCard({
  userName,
  postTitle,
  audioURL,
  commentCount = 0,
  likeCount = 0,
}) {
  // This is a state for control add comment modal
  const [isAddCommentModalOpen, setAddIscommentModalOpen] = useState(false);
  // This is a state for control comments of post compoennt, We'll set true when user click the card
  const [isCommentsSectionOpen, setIscommentsSectionOpen] = useState(false); // I mingth need manage that state from parent comopoennt I'll think later
  const addComment = () => {
    // open add comment modal.
    setAddIscommentModalOpen(true);
  };

  return <></>;
}

export default PostCard;
