import CommentForm from "./CommentForm";
import userIcon from '../../../images/user-icon.png'

import style from './Comment.module.scss';

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className={style["comment"]}>
      <div className={style["comment-image-container"]}>
        <img src={userIcon} />
      </div>
      <div className={style["comment-right-part"]}>
        <div className={style["comment-content"]}>
          <div className={style["comment-author"]}>{comment.username}</div>
          <div className={style["comment-date"]}>{createdAt}</div>
        </div>
        {!isEditing && <div className={style["comment-text"]}>{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Обновить"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className={style["comment-actions"]}>
          {canReply && (
            <div
              className={style["comment-action"]}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Ответить
            </div>
          )}
          {canEdit && (
            <div
              className={style["comment-action"]}
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Изменить
            </div>
          )}
          {canDelete && (
            <div
              className={style["comment-action"]}
              onClick={() => deleteComment(comment.id)}
            >
              Удалить
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Ответить"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className={style["replies"]}>
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;