new Uint8Array(2678);
new Float64Array(1000);
new Uint8ClampedArray(4);
const v9 = [-2.220446049250313e-16,1.0,2.0,648.5857221188667,4.83268233519161,5.0,1.7976931348623157e+308,827.7075778122669,1.0,-4.0];
const v10 = [1.3306597899927634e+308,-245763.9786808421,513.7208443957265,-1.7976931348623157e+308];
const v11 = [2.2250738585072014e-308,582.7418681616314,-1e-15];
class C12 extends Float64Array {
    constructor(a14, a15, a16) {
        super(a14, 1000, a15);
        v10[Symbol.iterator] = a15;
    }
}
new C12(v9, 1000, v10);
new C12(v10, Float64Array, v11);
new C12(v11, Float64Array, v11);
