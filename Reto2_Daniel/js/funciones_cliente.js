function limpiarFormularioCliente(){
    if(confirm("¿SEGURO QUE DESEA LIMPIAR LA PAGINA?")){
        var campo =  $("#codigo")
        var resultado =   $("#resultado")
        campo.val("") ;
        resultado.html("")
    }
}

function consultarCliente( ) 
{
    $.ajax( 
       {
            url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

           
            complete: function (xhr, status) {
                alert('Petición realizada, ' + xhr.status);
            },
            success: function (json) {
                $("#resultado").empty();
                tabla = "<center><table border='1'><tr><th>ID<th>NAME<th>EMAIL<th>AGE"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id
                    filas += "<td>" + json.items[i].name
                    filas += "<td>" + json.items[i].email
                    filas += "<td>" + json.items[i].age
                }
                $("#resultado").append(tabla + filas) /*+ "<tr><th colspan='2'>TOTAL:<td>$" + total + "</center>")*/
                console.log(json)
            }
        }
    );
}


function validarFormulario(){
    if($("#name").val() == ""){
        alert("El nombre es necesario")
        return false
    }
    if($("#email").val() == ""){
        alert("El email es necesario")
        return false
    }
    if($("#age").val() == ""){
        alert("La edad es necesario")
        return false
    }
    return true
}

function guardarCliente(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas Guardar este cliente?")){
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
                        type: 'POST',
                        dataType: 'json',
                        data : {
                                id: $("#id").val(),
                                name: $("#name").val(),
                                email: $("#email").val(),
                                age: $("#age").val(),
                        },
                        success: function (json) {
                           
                           
                        },
                        /*complete: function (xhr, status) {
                            alert('Petición realizada, ' + xhr.status);
                        },
                        error: function (xhr, status) {
                            alert('ha sucedido un problema, ' + xhr.status);
                        },*/
                    }
                )
        }
    }
}

function actualizarCliente(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas actualizar este cliente?")){
                let cliente={
                    id: $("#id").val(),
                    name: $("#name").val(),
                    email: $("#email").val(),
                    age: $("#age").val(),
                };
                console.log(cliente);
                let dataToSend=JSON.stringify(cliente);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
                        type: 'PUT',
                        dataType: 'json',
                        data: dataToSend,
                        contentType: "application/JSON",
                        success: function (json) {
                           
                           
                        },
                        /*complete: function (xhr, status) {
                            alert('Petición realizada, ' + xhr.status);
                        },
                        error: function (xhr, status) {
                            alert('ha sucedido un problema, ' + xhr.status);
                        },*/
                    }
                )
        }
    }
}

function eliminarCliente(){
    //if(validarFormulario()){
        if(confirm("¿Seguro que deseas eliminar este cliente?")){
                let cliente={
                    id: $("#id").val(),
                };
                console.log(cliente);
                let dataToSend=JSON.stringify(cliente);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client',
                        type: 'DELETE',
                        dataType: 'json',
                        data: dataToSend,
                        contentType: "application/JSON",
                        success: function (json) {
                            //alert('Petición realizada, ' + xhr.status);
                        },
                        /*complete: function (xhr, status) {
                            alert('Petición realizada, ' + xhr.status);
                        },
                        error: function (xhr, status) {
                            alert('ha sucedido un problema, ' + xhr.status);
                        },*/
                    }
                )
        }
    //}
}


