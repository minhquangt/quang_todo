(this.webpackJsonpmy_todo=this.webpackJsonpmy_todo||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),a=n(9),o=n.n(a),s=(n(15),n(8)),d=n(6),r=n(2),m=n(3),l=n(5),u=n(4),j=(n(16),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var t=this.props,e=t.change,n=t.value,i=t.name,c=t.add;return Object(j.jsxs)("div",{className:"add-todo",children:[Object(j.jsx)("input",{onChange:function(t){return e(t)},value:n,type:"text",name:"",id:"input-todo",placeholder:"Enter todo..."}),Object(j.jsx)("button",{onClick:function(){return c()},className:"btn-add",children:i})]})}}]),n}(i.Component),h=b,f=n(10),O=n.n(f),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).edit=function(t){i.props.editItem(t)},i.state={editItem:i.props.item},i}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.deleteItem,i=e.item,c=e.doneItem,a=e.edit;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:O()("todo-item",{done:i.isComplete,edit:a}),children:[Object(j.jsx)("button",{onClick:function(){return c(i)},className:"done-btn",children:Object(j.jsx)("i",{className:"far fa-check-circle"})}),Object(j.jsx)("p",{className:"todo-text",children:i.content}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("button",{onClick:function(){return n(i)},children:Object(j.jsx)("i",{className:"far fa-times-circle"})}),Object(j.jsx)("button",{onClick:function(e){return t.edit(t.state.editItem)},children:Object(j.jsx)("i",{className:"fas fa-edit"})})]})]})})}}]),n}(i.Component),I=n(20),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).deleteItem=function(t){var e=i.state.todoItems.filter((function(e){return e.id!==t.id}));i.setState({todoItems:e})},i.doneItem=function(t){var e=i.state.todoItems,n=t.isComplete,c=e.indexOf(t);i.setState({todoItems:[].concat(Object(d.a)(e.slice(0,c)),[Object(s.a)(Object(s.a)({},t),{},{isComplete:!n})],Object(d.a)(e.slice(c+1)))})},i.onInputChange=function(t){i.setState({newItem:t.target.value})},i.addTodo=function(){var t=i.state,e=t.newItem,n=t.edit,c=t.todoItems;if(""!==e.trim())if(n){var a=c.map((function(t){return i.state.editItem.id===t.id&&(t.content=e),t}));i.setState({newItem:"",todoItems:a,edit:!1})}else i.setState({newItem:"",todoItems:[].concat(Object(d.a)(c),[{id:Object(I.a)(),content:e,isComplete:!1,isEdit:!1}])})},i.editItem=function(t){i.setState({editItem:t,newItem:t.content,edit:!0})},i.state={newItem:"",edit:!1,editItem:{},todoItems:[]},i}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.newItem,i=e.todoItems,c=e.edit;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("h1",{className:"title",children:"What's the plan for today?"}),Object(j.jsx)(h,{name:c?"Update":"Add",value:n,change:this.onInputChange,add:this.addTodo}),i&&i.length>0&&i.map((function(e,n){return Object(j.jsx)(p,{item:e,edit:c,deleteItem:t.deleteItem,doneItem:t.doneItem,editItem:t.editItem},e.id)})),0===i.length&&Object(j.jsx)("p",{className:"nothing",children:"Nothing todo"})]})})}}]),n}(i.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.9a0eb8d3.chunk.js.map