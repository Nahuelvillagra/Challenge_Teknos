console.log('correcto');
//const user = nvillagra-829c;

/*############# PRUEBA DE CONSULTA DIRECTO DEL API #################*/
/* url de folders => "https://academia.tim.teknosgroup.com/nvillagra-829c/api/folders" */

function TraerFolders (){
    console.log('entraste a la funcion');
    const data= new XMLHttpRequest();
    data.open('GET',"https://academia.tim.teknosgroup.com/nvillagra-829c/api/folders", true);
    data.send();
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log('dentro del if');
            let dato = JSON.parse(this.responseText);
            for(var d in dato.data){
                console.log("folder"+d);
            }
        }
    }
    
}

TraerFolders();


/*const HTMLResponse = document.querySelector('#folders');

HTMLResponse.innerHTML= '';

fetch(`${urlFolders}`)
.then((response) => response.json())
.then((folders) => {
    const tpl = folders.map((folders) => document.querySelector('#folders').innerHTML += (`<li>${folders.icon} </br> ${folders.name}</li>`) )
})*/

//console.log(`<li>${folders.icon} </br> ${folders.name}</li>`)
//HTMLResponse.innerHTML= `<li>${folders.icon} </br> ${folders.name}</li>`



//bandeja de entrada
document.querySelector('#entrada').addEventListener("click", traerDatos() )

function traerDatos(){
    const data= new XMLHttpRequest();
    data.open('GET','../Modelos/inbox.json', true);
    data.send();
    data.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            console.log(datos.data);
            //console.log (datos.data[0].from);
            

            let info = document.querySelector('#infoDelMail')
            info.innerHTML = '';
            for(var d in datos.data){
                info.innerHTML +=
                `
                <a href="#" id="clickbox" >
                    <div class="row">
                        <div class="col-4"><p class="mail">${datos.data[d].from.name}</p></div>
                        <div class="col-4"><p class="mail">${datos.data[d].subject}<p></div>
                        <div class="col-4" class="mail"><p class="mail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam numquam autem eligendi expedita, porro aperiam fugit nesciunt doloremque excepturi ratione animi cumque repellat earum at. Accusamus itaque et unde sequi.</p></div>                        
                    </div>
                </a>`
            }
            
            window.addEventListener('click', function(e) {
                /*2. Si el div con id clickbox contiene a e. target*/
                if (document.getElementById('clickbox').contains(e.target)) {
                //console.log(e.target);
                info.innerHTML = '';
                info.innerHTML +=`
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-12">
                        <div class="row">
                            <a id="clickvolver" class="volver">📥 Volver a la bandeja</a> </br></br>
                            <div class="col-md-6"><p>De:${datos.data[d].from.name}</p><p>Para: Mi</p></div>
                            <div class="col-md-6">${datos.data[d].time}</div> <br>
                            <div class="col-md-12"><p>Asunto: ${datos.data[d].subject}</p></div> <br><br><br><br>
                            <div class="col-md-12">${datos.data[d].message}</div>
                        </div>
            
                        </div>
                    </div>
                    
                `
                } 
                })          
 

        } 
        window.addEventListener('click', function(e) {
            /*2. Si el div con id clickbox contiene a e. target*/
            if (document.getElementById('clickvolver').contains(e.target)) {
                traerDatos();
            }
        })
    }
}



//

//enviados 
