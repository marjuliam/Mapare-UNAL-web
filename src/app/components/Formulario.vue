<template>
  <div>
    <nav class="navbar navbar-light bg-light">
        <a href="/form" class="navbar-brand">Formularios</a>
        <a href="/form" class="navbar-brand">Otros</a>
    </nav>
    <div class="container">
        <div class="row pt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="guardar">
                            <div class="form-group">
                                <p>Tipo</p>
                                <input type="number" 
                                step="0.0000000001"
                                placeholder="Tipo"
                                class="form-control"
                                v-model="form.type"
                                >
                            </div>
                            <div class="form-group">
                                <p>Ancho</p>
                                <input type="number" 
                                step="0.0000000001"
                                placeholder="Insertar ancho"
                                class="form-control"
                                v-model="form.width"
                                >
                            </div>
                            <div class="form-group">
                                <p>Alto</p>
                                <input type="number" 
                                step="0.0000000001"
                                placeholder="Insertar alto"
                                class="form-control"
                                v-model="form.height"
                                >
                            </div>
                            <div class="form-group">
                                <p>Escala X</p>
                                <input type="number" 
                                step="0.0000000001"
                                placeholder="Insertar escala x"
                                class="form-control"
                                v-model="form.xScale"
                                >
                            </div>
                            <div class="form-group">
                                <p>Escala y</p>
                                <input type="number" 
                                step="0.0000000001"
                                placeholder="Insertar escala Y"
                                class="form-control"
                                v-model="form.yScale"
                                >
                            </div>
                            <button class="btn btn-success
                            btn-block">
                            Guardar
                            </button>
                        </form>
                    </div>
                </div>
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
                form:{
                    type: null,
                    width: null,
                    height: null,
                    xScale: null,
                    yScale: null
                },
                forms: []
            }
        },
        created(){
            this.cargar();
        },
        methods: {
            
            guardar(){

                fetch("/form", {
                    method: "POST",
                    body: JSON.stringify(this.form),
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))

                this.cargar();

                console.log(this.form);
                
            }, cargar(){
                fetch("/form")
                .then(res => res.json())
                .then(data => {
                    this.forms = data;
                    console.log(this.forms);
                })
            },  borrar(id){
                fetch(('/form/' + id), {
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