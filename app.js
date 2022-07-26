/**------------------------------  Porducto mas iva ------------------------------*/
const product = {
  count: 5,
  price: 12.55,
  type: "libro",
};

const iva = {
  alimentacion: 0.1,
  libro: 0.04,
  estandar: 0.21,
};

let ivaProducto, ivaTotal;
let total = product.count < 0 ? 0 : product.count * product.price;

// Filtro para el tipo
switch (product.type) {
  case "alimentacion":
    ivaProducto = product.price * iva.alimentacion;
    ivaTotal = total + total * iva.alimentacion;
    break;

  case "libro":
    ivaProducto = product.price * iva.libro;
    ivaTotal = total + total * iva.libro;
    break;

  default:
    ivaProducto = product.price * iva.estandar;
    ivaTotal = total + total * iva.estandar;
    break;
}

//como no me quedava del todo claro e creado iva por unidad e iva por total
console.log("Total del producto sin iva: ", total);
console.log("Iva del producto por unidad: ", ivaProducto);
console.log("Total del producto con iva: ", ivaTotal);

/**------------------------------ Nomina ------------------------------*/
const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

const irpf = {
  1: { salario: 0, porcentaje: 0 },
  2: { salario: 12000, porcentaje: 0.08 },
  3: { salario: 24000, porcentaje: 0.16 },
  4: { salario: 34000, porcentaje: 0.3 },
};

const retencionHijos = -0.02;

let neto, mensualNeto, irpfEmpleado;

switch (true) {
  case empleado.bruto > irpf[4].salario:
    irpfEmpleado = irpf[4].porcentaje;
    break;
  case empleado.bruto > irpf[3].salario:
    irpfEmpleado = irpf[3].porcentaje;
    break;
  case empleado.bruto > irpf[2].salario:
    irpfEmpleado = irpf[2].porcentaje;
    break;
  default:
    irpfEmpleado = irpf[1].porcentaje;
    break;
}

if (irpfEmpleado > 0) {
  irpfEmpleado =
    empleado.hijos > 0 ? irpfEmpleado + retencionHijos : irpfEmpleado;
  neto = empleado.bruto - empleado.bruto * irpfEmpleado;
} else {
  neto = empleado.bruto;
}

mensualNeto = neto / empleado.pagas;

console.log("Nomina en neto: ", neto);
console.log("Mensual neto: ", mensualNeto);

/** ------------------------------ Funcion de producto mas iva ------------------------------
 *   Uso los objetos del primer ejericio
 */

function getTotalVat(pProduct) {
  return pProduct.count > 0 ? pProduct.count * getVat(pProduct) : 0;
}

function getVat(pProduct) {
  switch (pProduct.type) {
    case "alimentacion":
      return pProduct.price + pProduct.price * iva.alimentacion;
    case "libro":
      return pProduct.price + pProduct.price * iva.libro;
    default:
      return pProduct.price + pProduct.price * iva.estandar;
  }
}

console.log(
  'Total del producto mas iva "Con funciones": ',
  getTotalVat(product)
);
