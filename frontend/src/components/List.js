import React from 'react';
import "./Style.css"

function List() {
  return (
    <div id="header">
      <form>
        <label>Title</label>
        <br />
        <input type="text" placeholder="My_text_here" />
        <button type="submit" placeholder="submit">Submit</button>
      </form>
    </div>


  )
}

export default List