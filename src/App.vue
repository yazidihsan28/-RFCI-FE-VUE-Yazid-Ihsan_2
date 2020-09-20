<template>
<div class="container">
  <div id="app" >
  <input v-model="newTodo" placeholder="new todo">
  <div id="form">
    <div class="row">
      <span>Output: 
      <ul>
        <li v-for="(todo,i) in todos" :key="todo" >
          {{ todo }}
          <button @click="del(i)">delete</button>
        </li>
      </ul>
      </span> 
    </div>
  <button @click="add()">add</button> 
  <button @click="undo()" @dblclick="redo()">undo/redo</button>
  </div>
</div>
</div>
</template>
 

<script>
export default {
  el:'#app',
  data() {
    const todos = []
    const history = [Object.assign([], todos)]
    const historyIndex = history.length - 1
    return {
      newTodo: undefined,
      todos: todos,
      history: history,
      historyIndex: historyIndex
    }
  },
  computed: {
    canUndo: function() {
      return this.historyIndex > 0
    },
    canRedo: function() {
      return this.history.length - 1 - this.historyIndex > 0
    }
  },
  methods: {
    add: function() {
      if (this.newTodo) {
        this.todos.push(this.newTodo)
        this.newTodo = undefined
        this.log(this.todos)
      }
    },
    del: function (i) {
      console.log(i)
      this.todos.splice(i,1)
      this.log(this.todos)
    },
    log: function(todos) {
      this.historyIndex += 1
      this.history.splice(this.historyIndex)
      this.history.push(Object.assign([], todos))
    },
    undo: function() {
      if (this.canUndo) {
        this.historyIndex -= 1
        this.todos = this.history[this.historyIndex]
      }
    },
    redo: function() {
      if (this.canRedo) {
        this.historyIndex += 1
        this.todos = this.history[this.historyIndex]
      }
    }
  }
}
</script> 
<style>
.container{
        /* padding: 30em; */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;  
        background-color: black;
        width: 100%;
        height: 100vh; 
    }
    #form{
      margin-top: 3em;
    }
    .row{
        flex-direction: row;
        justify-content: space-between;
        margin-right: 20px;
        color: grey;
    }  
    /* ul{
      margin-left: 40px;
    } */
    #label{
          margin-top: 5em;
          margin-left: -8em;
    }
    #space{
        margin-right: 1em;
    }
    #button-container{
        margin-top: 5em;
    }
</style>
