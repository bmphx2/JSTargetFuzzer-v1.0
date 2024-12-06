const v3 = [-9223372036854775807,2,268435439,0,0,55990];
const o5 = {
    "has": Array,
};
let v6;
try { v6 = v3.forEach(Array, v3); } catch (e) {}
Array[173] = v6;
const v11 = new Proxy(v3, o5);
const v12 = Array in v11;
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v12;
    this.c = 14;
}
const v22 = new F16("boolean", 8, 8, 14);
const v23 = new F16(8, 14, v22, "-2");
const o24 = {
    "c": o5,
    "g": v12,
    "h": -21666n,
};
new F16("-2", 8, v23, "boolean");
const v26 = [];
try { v26.every(v26, 65536n); } catch (e) {}
