import { useState } from "react";

import style from './CommentForm.module.scss';

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className={style["comment-form-textarea"]}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={style["comment-form-button"]} disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className={`${style["comment-form-button"]} ${style["comment-form-cancel-button"]}`}
          onClick={handleCancel}
        >
          Отмена
        </button>
      )}
    </form>
  );
};

export default CommentForm;