

<template>
    <div class="container ">
        <div class="row">
            <form action="">
                <input type="text" placeholder="masukkan input" v-model="history">
                    <!-- <br> -->
                    <!-- <div id="label"> -->
                        <p style="white-space: pre-line;" >Output: {{history}}</p>
                    <!-- </div> -->
                    <!-- <div id="button-container"> -->
                    <button type="submit" @click="add()" >Reverse</button>
                        <span id="space"></span>
                    <button @click="undo()"  @dblclick="redo()"  >Undo/Redo</button>
                    <!-- </div> -->
            </form>
        </div>
    </div>
</template>

<script>
export default { 
    // el:'#todo',
    data(){
        // const todos = []
        // const history = [Object.assign([], todos)]
        // const historyIndex = history.length - 1
        return{
            // newTodo: undefined,
            // todo: {},
            // history: history,
            // historyIndex: historyIndex
            history:[],
            currentIndex: -1
        }
    },
    methods:{
        add(state){
            // if(this.newTodo){
            //     this.todos.push(this.newTodo)
            //     this.newTodo = undefined
            //     // this.log(this.todos)
            // }
            if (this.currentIndex + 1 < this.history.length) {
            this.history.splice(this.currentIndex + 1);
            }
            this.history.push(state);
            this.currentIndex++;
            document.getElementById('').addEventListener('onclick',function(){
                    
            })
                
        },
    //     log(todos){
    //         this.historyIndex += 1
    //   this.history.splice(this.historyIndex)
    //   this.history.push(Object.assign([], todos))
    //     },
        undo(){
           this.undo()
        },
        redo(){
            this.redo()
        }
    }

}
</script>

<style> 
    .container{
        padding: 0;
        margin: 0;
        background-color: black;
        width: 100%;
        height: 100vh;
    }
    .row{
        flex-direction: column;
        height: 70vh;
        padding:10em;
        justify-content: center;
    } 
    span{
      
        color: grey;
    }
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