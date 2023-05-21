let input = document.getElementById("input");
let btn = document.getElementById("Addbtn")
let list = document.getElementById('renderHtml')
 


class Todo{
    constructor(display){
        this.display = display
        this.todoList = []
         
    }

    add(value){
       this.todoList = [value, ...this.todoList] 
       
    }

    delete(id){ 
   let update = this.todoList.filter((ele,index)=>{
            return index !== id
         })
         
        this.todoList = update
         
    }

    update(){

         if(this.todoList.length<1){
            list.innerHTML = `<div>You have no Task Yet....</div>`
         }else{
            this.display.innerHTML = ""
         }
         
        this.todoList.forEach((ele,index)=>{
            this.display.innerHTML+=`
            <div class="task">
               ${ele}
            <button id="dltbutton" onClick={deletefync(${index})}>Delete</button>
          </div>
            `
            
        })
    
    }


}

let TodoItems = new Todo(list)
TodoItems.update()

function deletefync(index){
    TodoItems.delete(index)
    TodoItems.update()
}

btn.addEventListener("click",()=>{
     if(input.value === " ") return
     TodoItems.add(input.value)
     TodoItems.update()
     input.value = " "
})

 