// Obtener datos y calcular la corriente teórica del motor

function calculoDeCorrienteTeorica(voltajeNominal,potenciaNominal,corrienteNominal,factorServicio,factorPotencia,eficienciaPorcentaje,tensionControl){
    let corrienteTeorica = 0;
    let Vn = parseFloat(voltajeNominal);
    let Pn = parseFloat(potenciaNominal);
    let In = parseFloat(corrienteNominal);
    let FS = parseFloat(factorServicio);
    let FP = parseFloat(factorPotencia);
    let Eff = parseFloat(eficienciaPorcentaje)/100;
    let TC = tensionControl;

    if (In===0){
        corrienteTeorica = (((Pn/Eff)/(Math.sqrt(3)*Vn*FP*Eff))*FS).toFixed(2);
    } else {
        corrienteTeorica = In;
    }
    return console.log(`La Corriente Teórica es ${corrienteTeorica} A y la Tensión de Control es ${TC}`);
}

module.exports = {
    calculoDeCorrienteTeorica
};
