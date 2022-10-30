const resumen = (event) => {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
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
}

const botonBorrar = () => {
    document.getElementById("formularioVenta").reset();
    document.getElementById('pago').innerText = "";
}
