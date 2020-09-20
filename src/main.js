import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
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
}).$mount('#app')
