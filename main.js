// ======= batteryA =======
initBattery()

function initBattery(){
    const   batteryLiquido = document.querySelector('.battery_liquido'),
            batteryEstado = document.querySelector('.battery_estado'),
            batteryPorcentaje = document.querySelector('.battery_porcentaje')

    navigator.getBattery().then((batt) => {
        updateBattery = () =>{
            /* ACTUALIZAMOS EL NUMERO DE BATERIA DE ACUERDO AL MOVIL OPC*/
            let level = Math.floor(batt.level * 100)
            batteryPorcentaje.innerHTML = level+ "%"

            /* ACTUALIZAMOS EL COLOR DE FONDO DE LA PILA DEACORDE ALA BATERIA*/
            batteryLiquido.style.height = `${parseInt(batt.level * 100)}%`

            /* VALIDAMOS LA CARGA DE LA PILA Y SI CARGA O NO*/
            if(level == 100) { /* VALIDAMOS SI ESTA FULL LA BATERIA*/
                batteryEstado.innerHTML = `Full battery <i class="ri-battery-2-fill verde-color"></i>`
                batteryLiquido.style.height = '103%'
            }

            else if(level <= 20 &! batt.carga) { /* VALIDAMOS SI LA BATERIA ESTA BAJA*/
                batteryEstado.innerHTML = `Batería baja <i class="ri-plug-line animacion-rojo"></i>`
            }

            else if(batt.charging) { /*VALIDAMOS LA CARGA DE LA PILA*/
                batteryEstado.innerHTML = `Cargando... <i class="ri-flashlight-fill animacion-verde"></i>`
            }

            else { /*NO MOSTRAR CARGA*/
                batteryEstado.innerHTML = ''
            }

            if(level <= 20) { /*ACTUALIZAMOS EL COLOR DEACORDE AL NIVEL DE CARGA*/
                batteryLiquido.classList.add('gradient-color-rojo')
                batteryLiquido.classList.remove('gradient-color-anaranjado','gradient-color-amarillo','gradient-color-verde')
            }

            else if(level <= 40) {
                batteryLiquido.classList.add('gradient-color-anaranjado')
                batteryLiquido.classList.remove('gradient-color-rojo','gradient-color-amarillo','gradient-color-verde')
            }

            else if(level <= 80) {
                batteryLiquido.classList.add('gradient-color-amarillo')
                batteryLiquido.classList.remove('gradient-color-rojo','gradient-color-anaranjado','gradient-color-verde')
            }

            else {
                batteryLiquido.classList.add('gradient-color-rojo')
                batteryLiquido.classList.remove('gradient-color-anaranjado','gradient-color-anaranjado','gradient-color-amarillo')
            }

        }
        updateBattery()

        /* ESTADO DE BATERIA*/
        batt.addEventListener('chargingchange', () => {updateBattery()})
        batt.addEventListener('levelchange', () => {updateBattery()})
    })
}

