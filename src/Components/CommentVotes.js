import { ReactComponent as IconPlus } from "../Assets/images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../Assets/images/icon-minus.svg";
import './Styles/Comment.css';

const CommentVotes = ({
  vote,
  setVoted,
  score,
  setScore,
  updateScore,
  commentData,
  type
}) => {
  // up vote and down vote
  let upVote = () => {
    if (vote === false) {
      let n = score + 1;
      setScore(n);
      updateScore(n, commentData.id, type);
      setVoted(true);
    }
  };

  let downVote = () => {
    if (vote === true) {
      let n = score - 1;
      setScore(n);
      updateScore(n, commentData.id, type);
      setVoted(false);
    }
  };

  return (
    <div className="comment-votes">
      <button className="plus-btn" onClick={upVote} aria-label="plus-btn">
        <IconPlus />
      </button>
      <div className="votes-counter">{commentData.score}</div>
      <button className="minus-btn" onClick={downVote} aria-label="minus-btn">
        <IconMinus />
      </button>
    </div>
  );
};

export default CommentVotes;
