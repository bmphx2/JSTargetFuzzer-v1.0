function f3() {
    return -4294967295n;
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.d = -65536;
    F7.f = 536870912;
}
new F7(-64864n, -65206n);
new F7(536870912, -65206n);
new F7(F7, -65206n);
const v19 = new Float64Array(65);
v19["toLocaleString"]();
