function f3() {
    return -1;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.g = f3;
}
const v7 = new F4(-1);
(-1 % v7) in v7;
v7[-1];
const v14 = new F4(1);
new F4(128);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.d = a18;
    this.c = 1;
}
const v21 = new F16(-1, v7, 1);
new F16(-1, v21, 128);
new F16(1, v14, -1);
const v24 = [12606,-4096,572929245,-13,536870888,-931515755];
[-11,4294967295,-9223372036854775807,-587702379,4294967295,-15,988357865,43999];
const v26 = [-4096,-3,1906554551];
new Float32Array(12);
new Uint16Array(7);
const v38 = new Int16Array(8);
function f42() {
    return 268435441;
}
let v43;
try { v43 = ("PrS").slice(7); } catch (e) {}
v43 || Float32Array;
const v48 = -(-54447);
const v49 = v48 ^ -54447;
const v50 = -(-54447);
const v51 = -v48;
Math.exp(v50);
v49 & -54447;
v51 ^ v50;
const v55 = [f42,v38];
Reflect.apply(v26.map, v24, v55);
