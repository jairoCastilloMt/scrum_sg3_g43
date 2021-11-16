function limpiarFormularioMensaje(){
    if(confirm("¿SEGURO QUE DESEA LIMPIAR LA PAGINA?")){
        var campo =  $("#codigo")
        var resultado =   $("#resultado")
        campo.val("") ;
        resultado.html("")
    }
}

function consultarMensaje( ) 
{
    $.ajax( 
       {
            url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

           
            complete: function (xhr, status) {
                alert('Petición realizada, ' + xhr.status);
            },
            success: function (json) {
                $("#resultado").empty();
                tabla = "<center><table border='1'><tr><th>ID<th>MESSAGE TEXT"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id
                    filas += "<td>" + json.items[i].messagetext
                }
                $("#resultado").append(tabla + filas) /*+ "<tr><th colspan='2'>TOTAL:<td>$" + total + "</center>")*/
                console.log(json)
            }
        }
    );
}


function validarFormulario(){
    if($("#messagetext").val() == ""){
        alert("El mensaje es necesario")
        return false
    }
    return true
}

function guardarMensaje(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas Guardar este mensaje?")){
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
                        type: 'POST',
                        dataType: 'json',
                        data : {
                                id: $("#id").val(),
                                messagetext: $("#messagetext").val(),
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

function actualizarMensaje(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas actualizar este mensaje?")){
                let mensaje={
                    id: $("#id").val(),
                    messagetext: $("#messagetext").val(),
                };
                console.log(mensaje);
                let dataToSend=JSON.stringify(mensaje);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
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

function eliminarMensaje(){
    //if(validarFormulario()){
        if(confirm("¿Seguro que deseas eliminar este mensaje?")){
                let mensaje={
                    id: $("#id").val(),
                };
                console.log(mensaje);
                let dataToSend=JSON.stringify(mensaje);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message',
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

