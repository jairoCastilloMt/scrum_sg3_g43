function limpiarFormularioCubiculo(){
    if(confirm("¿SEGURO QUE DESEA LIMPIAR LA PAGINA?")){
        var campo =  $("#codigo")
        var resultado =   $("#resultado")
        campo.val("") ;
        resultado.html("")
    }
}

function consultarCubiculo( ) 
{
    $.ajax( 
       {
            url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

           
            complete: function (xhr, status) {
                alert('Petición realizada, ' + xhr.status);
            },
            success: function (json) {
                $("#resultado").empty();
                tabla = "<center><table border='1'><tr><th>ID<th>TARGET<th>CAPACITY<th>CATEGORY_ID<th>NAME"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id
                    filas += "<td>" + json.items[i].target
                    filas += "<td>" + json.items[i].capacity
                    filas += "<td>" + json.items[i].category_id
                    filas += "<td>" + json.items[i].name
                    //total += json.items[i].valor
                }
                $("#resultado").append(tabla + filas) /*+ "<tr><th colspan='2'>TOTAL:<td>$" + total + "</center>")*/
                console.log(json)
            }
        }
    );
}


function validarFormulario(){
    if($("#target").val() == ""){
        alert("El objetivo es necesario")
        return false
    }
    if($("#capacity").val() == ""){
        alert("La capacidad es necesario")
        return false
    }
    if($("#category_id").val() == ""){
        alert("El Id de la categoria es necesario")
        return false
    }
    if($("#name").val() == ""){
        alert("El nombre es necesario")
        return false
    }
    return true
}

function guardarCubiculo(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas Guardar este gasto?")){
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library',
                        type: 'POST',
                        dataType: 'json',
                        data : {
                                id: $("#id").val(),
                                target: $("#target").val(),
                                capacity:  $("#capacity").val(),
                                category_id: $("#category_id").val(),
                                name: $("#name").val()
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

function actualizarCubiculo(){
    if(validarFormulario()){
        if(confirm("¿Seguro que deseas actualizar este gasto?")){
                let cubiculo={
                    id: $("#id").val(),
                    target: $("#target").val(),
                    capacity: $("#capacity").val(),
                    category_id: $("#category_id").val(),
                    name: $("#name").val(),
                };
                console.log(cubiculo);
                let dataToSend=JSON.stringify(cubiculo);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library',
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

function eliminarCubiculo(){
    //if(validarFormulario()){
        if(confirm("¿Seguro que deseas eliminar este gasto?")){
                let cubiculo={
                    id: $("#id").val(),
                };
                console.log(cubiculo);
                let dataToSend=JSON.stringify(cubiculo);
                $.ajax(
                    {
                        url: 'https://g1c208293d5025f-mintic.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library',
                        type: 'DELETE',
                        dataType: 'json',
                        data: dataToSend,
                        contentType: "application/JSON",
                        success: function (json) {
                            alert('Petición realizada, ' + xhr.status);
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








