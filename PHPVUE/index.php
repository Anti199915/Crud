<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->    
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
    <!--Sweet Alert 2 -->
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">        
    <!--CSS custom -->  
    <link rel="stylesheet" href="main.css">  
    </head>
    <body>
    <header>
        <h2 class="text-center text-dark"><span class="badge badge-warning">CRUD Pasteles</span></h2>
    </header>    
    
     <div id="ingredientes">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                    <button @click="btnAlta" class="btn btn-success" title="Nuevo"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
                <div class="col text-right">                        
                    <h5>Stock Total: <span class="badge badge-success">{{totalStock}}</span></h5>
                </div>    
            </div>                
            <div class="row mt-5">
                <div class="col-lg-12">                    
                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-primary text-light">
                                 <th>ID</th> 
                                <th>Ingrediente</th>                                    
                                <th>Fecha de ingreso</th>
                                <th>Fecha de vencimiento</th>
                                <th>Stock</th>    
                                <th></th>
                                <th></th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(ingrediente,indice) of ingredientes">       
                                <td>{{ingrediente.id}}</td>                          
                                <td>{{ingrediente.descripcion}}</td>                                
                                <td>{{ingrediente.fechacreacion}}</td>
                                <td>{{ingrediente.fechavencimiento}}</td>

                                <td>
                                    <div class="col-md-8">
                                    <input type="number" v-model.number="ingrediente.stock" class="form-control text-right" disabled>      
                                    </div>    
                                </td>
                                <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-secondary" title="Editar" @click="btnEditar(ingrediente.descripcion, ingrediente.id, ingrediente.fechacreacion, ingrediente.fechavencimiento, ingrediente.stock)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(ingrediente.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>        
    </div>        


    <div id="pastel">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                    <button @click="btnAlta" class="btn btn-success" title="Nuevo"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
                <div class="col text-right">                        
                    <h5>Stock Total: <span class="badge badge-success">{{totalStock}}</span></h5>
                </div>    
            </div>                
            <div class="row mt-5">
                <div class="col-lg-12">                    
                    <table class="table table-striped">
                        <thead>
                            <tr class="bg-primary text-light">
                                 <th>ID</th> 
                                <th>Nombre</th>                                    
                                <th>Preparado por</th>
                                <th>Fecha Creacion</th>
                                <th>Fecha de vencimiento</th>    
                                <th>Descripcion</th>
                                <th></th>
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(ingrediente,indice) of ingredientes">       
                                <td>{{pastel.id}}</td>                          
                                <td>{{pastel.nombre}}</td>                                
                                <td>{{pastel.madefor}}</td>
                                <td>{{pastel.fechacreacion}}</td>
                                <td>{{pastel.fechavencimiento}}</td>
                                <td>{{pastel.descripcion}}</td>

                                <td>
                                    <div class="col-md-8">
                                    <input type="number" v-model.number="pastel.stock" class="form-control text-right" disabled>      
                                    </div>    
                                </td>
                                <td>
                                <div class="btn-group" role="group">
                                    <button class="btn btn-secondary" title="Editar" @click="btnEditar(pastel.nombre, pastel.madefor, pastel.fechacreacion, pastel.fechavencimiento, pastel.descripcion)"><i class="fas fa-pencil-alt"></i></button>    
                                    <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(ingrediente.id)"><i class="fas fa-trash-alt"></i></button>      
								</div>
                                </td>
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>        
    </div>        

 
    
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
    <!--Vue.JS -->    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Sweet Alert 2 -->        
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>      
    <!--Código custom -->          
    <script src="main.js"></script>         
    </body>
</html>