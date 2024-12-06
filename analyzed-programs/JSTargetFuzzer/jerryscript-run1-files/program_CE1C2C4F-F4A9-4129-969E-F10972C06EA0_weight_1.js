function f3() {
    return 2147483649;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
}
const v7 = new F4(10000);
const v8 = new F4(-1623296176);
v7[2147483649] = v7;
try { v8(); } catch (e) {}
[[Int32Array,Int32Array,Int32Array]];
const t11 = [-54.0310707239164,576243.2141653313,-158.04774453674008,0.9605219470449448,-7.06501131684951e+307];
t11.length = 513128259;
new f3();
new F4(2147483649);
Array(Array);
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
}
new F24(F24);
function f35(a36) {
    return a36;
}
const o37 = {
};
let v39 = new Proxy(f35, o37);
v39 |= Proxy;
