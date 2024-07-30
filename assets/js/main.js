
    // 1. JS con Bootstrap para los mensajes de alerta cuando se hace click 
    //    en "Enviar": Crea un <div> con el mensaje y la opción de cierre (X)
    //    Revisa que los campos del formulario de contacto no estén vacios
    //    y limpia el formulario de contacto despues de enviar el mensaje

    const alertaClick = document.getElementById("enviarMensaje")
    alertaClick.addEventListener("click",  function(eventoClick) {
        eventoClick.preventDefault()

        console.log ("hubo CLICK")
        limpiaDIV ()

        const nombre    = document.getElementById("nombre").value.trim()
        const asunto    = document.getElementById("asunto").value.trim()
        const mensaje   = document.getElementById("mensaje").value.trim()

        if (nombre == "") { 
            mensajeAlerta("Debe ingresar un nombre", "warning")
        } else {
            if (asunto == "") { 
                mensajeAlerta("Debe ingresar un asunto", "warning")
            } else  {
                if (mensaje == "") { 
                    mensajeAlerta ("Debe ingresar un mensaje", "warning")
                } else { 
                    console.log ("--- BINGO ---")
                    mensajeAlerta('El mensaje fue enviado correctamente', 'success')
                    const formulario = document.getElementById('formulario')
                    formulario.reset()
                }
            }
        }
    });

    // Inserta un <div> con un mensaje de color ad-hoc al mismo
    const campoAlerta = document.getElementById('alerta')
    const mensajeAlerta = (message, type) => {
    const esteEsElDiv = document.createElement('div')
    esteEsElDiv.innerHTML = [
        `<div id="myAlert" class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button id="closeAlertBtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
        ].join('')
    campoAlerta.append(esteEsElDiv)
    };

    // Llama a limpiar el <div> -si existe- después de llenar un campo del formulario 
    const nombreId  = document.getElementById("nombre")
    nombreId.onchange = function () {
        console.log ("+++ Nombre")
        limpiaDIV ()
    };

    const asuntoId  = document.getElementById("asunto")
    asuntoId.onchange = function () {
        console.log ("+++ Asunto")
        limpiaDIV ()
    };

    const mensajeId  = document.getElementById("mensaje")
    mensajeId.onchange = function () {
        console.log ("+++ Mensaje")
        limpiaDIV ()
    };

    // Función que limpia el <div>
    function limpiaDIV () {
        console.log ("Entrando a limpiar")
        const closeAlertBtn = document.getElementById('closeAlertBtn');
        if (closeAlertBtn) {
            const myAlert = document.getElementById('myAlert');
            if (myAlert) {
                const bsAlert = new bootstrap.Alert(myAlert);
                if (bsAlert) {
                    console.log('Borra boton de alerta');
                    bsAlert.close();
                };
            }
        }
    }


    //  2. Manejo del tooltip
    //     Inicializamos todos los tooltips

    document.addEventListener('DOMContentLoaded', function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });


    //  3. Agregamos un evento click al boton con id="enviarMensaje"
    //     y Escondemos el tooltip al hacer click sobre el boton que lo activa

    document.getElementById("enviarMensaje").addEventListener("click", function() { 
        var tooltip = bootstrap.Tooltip.getInstance(this); 
        tooltip.hide();
    });


    // 4. JS para el smooth al ir a alguna sección de la página
    //    - Se obtienen todos los enlaces que apuntan a anclas (#)
    //    - Se añade un evento click a cada enlace
    //    - Se obtiene el ID del elemento objetivo
    //    - Se desplaza suavemente hacia el elemento objetivo



    document.addEventListener('DOMContentLoaded', function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var targetPosition = targetElement.offsetTop - navbarHeight - 50;
            console.log (targetPosition, navbarHeight )
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
                });
            });
        });
    });


    // 5. En la versión mobile se cierra el menú después de hacer 
    //    click en alguna opción de la lista

    document.addEventListener('DOMContentLoaded', function() {
        var menuLinks = document.querySelectorAll('.navbar-nav .nav-link');

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var navbarToggler = document.querySelector('.navbar-toggler');
                var navbarCollapse = document.querySelector('.navbar-collapse');

                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    });






