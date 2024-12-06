function f3() {
    return 2147483649;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
}
new F4(10000);
new F4(-1623296176);
new F4(2147483649);
function f19(a20) {
    return a20;
}
const o21 = {
};
let v23 = new Proxy(f19, o21);
v23 |= Proxy;
