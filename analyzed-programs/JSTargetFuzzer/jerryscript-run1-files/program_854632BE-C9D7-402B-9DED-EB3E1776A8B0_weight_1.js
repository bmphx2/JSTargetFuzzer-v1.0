function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 15;
    F0.a = 15;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(10);
class C12 {
    e;
}
new C12();
new C12();
new C12();
new Float64Array(1653);
new Float32Array(9);
function f22(a23) {
    return a23;
}
const o24 = {
};
let v26 = new Proxy(f22, o24);
v26 |= Proxy;
