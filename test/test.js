const chai = require('chai').expect;
const convertir = require('..');

describe ( '#KGtoLB',function () {
	it('Aca cambiaremos 10LB a KG el resultado debe ser 22.05',function () {
		const res = convertir.KGtoLB(10)
		chai(res).to.equal(22.05)
	})	
	it('Aca cambiaremos 10KG a LB el resultado debe ser 4.54',function () {
		const res = convertir.LBtoKG(10)
		chai(res).to.equal(4.54)
	})
})