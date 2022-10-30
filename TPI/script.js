const resumen = () => {
    const ticket = 200;
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const cantidad = document.getElementById('cantidad').value
    const categoria = document.getElementById('inputCategoria').value

   if (cantidad && parseFloat(categoria)) {

        const subTotal = ticket * cantidad
        
        const descuento = subTotal * parseFloat(categoria)

        const total = subTotal - descuento

        document.getElementById('pago').innerText = total

   } 
   window.scrollY(0);
}

const botonBorrar = () => {
    document.getElementById("formularioVenta").reset();
    document.getElementById('pago').innerText = "";
}

