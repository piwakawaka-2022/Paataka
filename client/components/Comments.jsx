import React from "react";

function Comments () {

  const [newComment, setNewComment] = useState()

  function changeHandler (evt) {
// preventdefault shit
  }

  function submitHandler (evt) {

  }

  return (
    <>

    <form onSubmit={submitHandler}>

      <h4>Comment</h4>

      <label>
          <input type='text' id='comment' value={newComment} onChange={changeHandler} />
      </label>

    </form>

    <p>THE ACTUAL COMMENTS - v2</p>

    </>
  )

}

export default Comments