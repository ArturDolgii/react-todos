import React from "react";

const TodosInputJsx = (_this) => (
    <input type="text"
           className="form-control"
           value={_this.state.text}
           onChange={e => _this.setState({ text: e.target.value })}
           onKeyUp={e => _this.handleKeyUp(e)}
           placeholder="What needs to be done?" />
);

export default TodosInputJsx;
