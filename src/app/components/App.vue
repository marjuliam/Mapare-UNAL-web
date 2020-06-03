<template>
  <div>
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">LINK</a>
    </nav>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="guardar">
                            <div class="form-group">
                                <input type="text" 
                                placeholder="Insertar"
                                class="form-control"
                                v-model="task.title">
                            </div>
                            <div class="form-group">
                                <textarea cols="30" 
                                rows="10"
                                class="form-control"
                                placeholder="Insertar descripción"
                                v-model="task.description">
                                </textarea>
                            </div>
                            <button class="btn btn-success
                            btn-block">
                            Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks">
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            <td>
                                <button @click="borrar(task._id)"
                                class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    /*
    class Task {
        constructor(title, description) {
            this.task.title = "";
            this.task.description = "";
        }
    }
    */

    export default {
        data() {
            return {
                task:{
                    title: "",
                    description: ""
                },
                tasks: []
            }
        },
        created(){
            this.cargar();
        },
        methods: {
            
            guardar(){

                fetch("/api/tasks", {
                    method: "POST",
                    body: JSON.stringify(this.task),
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))

                this.cargar();

                console.log(this.task);
                
            }, cargar(){
                fetch("/api/tasks")
                .then(res => res.json())
                .then(data => {
                    this.tasks = data;
                    console.log(this.tasks);
                })
            },  borrar(id){
                fetch(('/api/tasks/' + id), {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                })
                .then(data => console.log(data));

                this.cargar();
            }


        } 
    }

</script>  