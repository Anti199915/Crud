var url = "bd/crud.php";

var ingredientes = new Vue({    
el: "#ingredientes",   
data:{     
  ingredientes:[],   
  Descripciion_ingrediente:"",       
  Fecha_ingreso:"",
  Fecha_vencimiento:"",
     stock:"",
     total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        '<div class="row"><label class="col-sm-3 col-form-label">Ingrediente</label><div class="col-sm-7"><input id="Descripciion_ingrediente" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha de ingreso</label><div class="col-sm-7"><input id="Fecha_ingreso" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha de vencimiento</label><div class="col-sm-7"><input id="Fecha_vencimiento" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" type="number" min="0" class="form-control"></div></div>',              
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'OK',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Descripciion_ingrediente = document.getElementById('Ingrediente').value,
              this.Fecha_ingreso = document.getElementById('Fecha de ingreso').value,
             this.stock = document.getElementById('Stock').value,          
             this.Fecha_vencimiento = document.getElementById('Fecha de vencimiento').value                
            ]
          }
        })        
        if(this.Descripciion_ingrediente == "" || this.Fecha_ingreso == "" || this.stock == 0 ||this.Fecha_vencimiento == ""){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.altaingrediente();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id,Descripciion_ingrediente, Fecha_ingreso, Fecha_vencimiento, stock){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Descripciion_ingrediente</label><div class="col-sm-7"><input id="Descripciion_ingrediente" value="'+Descripciion_ingrediente+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha_ingreso</label><div class="col-sm-7"><input id="Fecha_ingreso" value="'+Fecha_ingreso+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Descripciion_ingrediente</label><div class="col-sm-7"><input id="Fecha_vencimiento" value="'+Fecha_vencimiento+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" value="'+stock+'" type="number" min="0" class="form-control"></div></div></div>', 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            Descripciion_ingrediente = document.getElementById('Ingrediente').value,    
            Fecha_ingreso = document.getElementById('Fecha de creación').value,
            stock = document.getElementById('stock').value,                
            Fecha_vencimiento = document.getElementById('Fecha de vencimiento').value,         
            
            this.editaringrediente(id,Descripciion_ingrediente,Fecha_ingreso,Fecha_vencimiento,stock);
            Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borraringrediente(id);             
     
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para el CRUD     
    listaringredientes:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.ingredientes = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaingrediente:function(){
        axios.post(url, {opcion:1, descripcion:this.descripcion, fechacreacion:this.fechacreacion,stock:this.stock, fechavencimiento:this.fechavencimiento, }).then(response =>{
            this.listaringredientes();
        });        
         this.descripcion = "",
         this.FechaI = "",
         this.stock = 0
         this.fechaV = ""
    },               
    //Procedimiento EDITAR.
    editaringrediente:function(id,Descripciion_ingrediente,Fecha_ingreso,Fecha_vencimiento,stock){       
       axios.post(url, {opcion:2, id:id, descripcion:descripcion, fechacreacion:fechacreacion, fechavencimiento: fechavencimiento, stock:stock }).then(response =>{           
           this.listaringredientes();           
        });                              
    },    
    //Procedimiento BORRAR.
    borraringrediente:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listaringredientes();
            });
    }             
},      
created: function(){            
   this.listaringredientes();            
},    
computed:{
    totalStock(){
        this.total = 0;
        for(ingredientes of this.ingredientes){
            this.total = this.total + parseInt(ingrediente.stock);
        }
        return this.total;   
    }
}    




});

var pastel = new Vue({    
  el: "#pastel",   
  data:{     
    ID_Pastel:[],   
    Nombre_pastel:"",       
    Preparado_por:"",
    Fecha_vencimiento:"",
    Fecha_creacion:"",
Descripcion:"",

       stock:"",
       total:0,       
   },    
  methods:{  
      //BOTONES        
      btnAlta:async function(){                    
          const {value: formValues} = await Swal.fire({
          title: 'NUEVO',
          html:
          '<div class="row"><label class="col-sm-3 col-form-label">Nombre_pastel</label><div class="col-sm-7"><input id="Nombre_pastel" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Preparadp_por</label><div class="col-sm-7"><input id="Preparadp_por" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Fecha_vencimiento</label><div class="col-sm-7"><input id="Fecha_vencimiento" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" type="number" min="0" class="form-control"></div></div>',              
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: 'OK',          
          confirmButtonColor:'#1cc88a',          
          cancelButtonColor:'#3085d6',  
          preConfirm: () => {            
              return [
                this.Nombre_pastel = document.getElementById('Nombre').value,
                this.Preparado_por = document.getElementById('Fecha de ingreso').value,
               this.Fecha_creacion = document.getElementById('Fecha de creacion').value,          
               this.Fecha_vencimiento = document.getElementById('Fecha de vencimiento').value,
               this.Descripcion = document.getElementById('Descripcion').value                
              ]
            }
          })        
          if(this.Nombre_pastel == "" || this.Fecha_creacion == "" || this.stock == 0 ||this.Preparado_por == ""||this.Preparado_por == ""){
                  Swal.fire({
                    type: 'info',
                    title: 'Datos incompletos',                                    
                  }) 
          }       
          else{          
            this.altaingrediente();          
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: '¡Producto Agregado!'
              })                
          }
      },           
      btnEditar:async function(ID_Pastel,Nombre_pastel, Preparado_por, Fecha_creacion,Fecha_vencimiento , stock){                            
          await Swal.fire({
          title: 'EDITAR',
          html:
          '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Descripciion_ingrediente</label><div class="col-sm-7"><input id="Descripciion_ingrediente" value="'+Descripciion_ingrediente+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Modelo</label><div class="col-sm-7"><input id="modelo" value="'+Fecha_ingreso+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Descripciion_ingrediente</label><div class="col-sm-7"><input id="Fecha_vencimiento" value="'+Fecha_vencimiento+'" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Stock</label><div class="col-sm-7"><input id="stock" value="'+stock+'" type="number" min="0" class="form-control"></div></div></div>', 
          focusConfirm: false,
          showCancelButton: true,                         
          }).then((result) => {
            if (result.value) {                                             
              Nombre_pastel = document.getElementById('Ingrediente').value,    
              Preparado_por= document.getElementById('Preparado por').value, 
              Fecha_creacion = document.getElementById('Fecha de creación').value,
              stock = document.getElementById('stock').value,                
              Fecha_vencimiento = document.getElementById('Fecha de vencimiento').value,         
              
              this.editarPastel(ID_Pastel,Nombre_pastel,Preparado_por,Fecha_vencimiento,Fecha_creacion,stock);
              Swal.fire(
                '¡Actualizado!',
                'El registro ha sido actualizado.',
                'success'
              )                  
            }
          });
          
      },        
      btnBorrar:function(ID_Pastel){        
          Swal.fire({
            title: '¿Está seguro de borrar el registro: '+ID_Pastel+" ?",         
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#d33',
            cancelButtonColor:'#3085d6',
            confirmButtonText: 'Borrar'
          }).then((result) => {
            if (result.value) {            
              this.borrarPastel(ID_Pastel);             
       
              Swal.fire(
                '¡Eliminado!',
                'El registro ha sido borrado.',
                'success'
              )
            }
          })                
      },       
      
      //PROCEDIMIENTOS para el CRUD     
      listarPastel:function(){
          axios.post(url, {opcion:4}).then(response =>{
             this.ingredientes = response.data;       
          });
      },    
      //Procedimiento CREAR.
      altapastel:function(){
          axios.post(url, {opcion:1, Nombre_pastel:this.Nombre_pastel, Preparado_por:this.Preparado_por,stock:this.stock, Fecha_creacion:this.Fecha_creacion,Fecha_vencimiento:this.Fecha_vencimiento }).then(response =>{
              this.listarpastel();
          });        
           this.descripcion = "",
           this.FechaI = "",
           this.stock = 0
           this.fechaV = ""
      },               
      //Procedimiento EDITAR.
      editarpastel:function(ID_Pastel,Nombre_pastel,Preparado_por,stock,Fecha_vencimiento, Fecha_creacion){       
         axios.post(url, {opcion:2, ID_Pastel:ID_Pastel, Nombre_pastel:Nombre_pastel, Fecha_vencimiento:Fecha_vencimiento, Fecha_creacion: Fecha_creacion, stock:stock, Preparado_por:Preparado_por }).then(response =>{           
             this.listarpastel();           
          });                              
      },    
      //Procedimiento BORRAR.
      borrarpastel:function(ID_Pastel){
          axios.post(url, {opcion:3, ID_Pastel:ID_Pastel}).then(response =>{           
              this.listarpastel();
              });
      }             
  },      
  created: function(){            
     this.listarpastel();            
  },    
  computed:{
      totalStock(){
          this.total = 0;
          for(ingredientes of this.ingredientes){
              this.total = this.total + parseInt(ingrediente.stock);
          }
          return this.total;   
      }
  }    
  
  
  

});