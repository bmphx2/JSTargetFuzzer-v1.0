function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.ignoreCase = -10;
    this.g = a8;
}
new F6(-10, -10, 0.7204744004760668);
new F6(-10, 0.7204744004760668, -1000000000000.0);
const v13 = new F6(-1000000000000.0, -1000000000.0, 0.7204744004760668, 268435456);
function f17() {
    return f17;
}
const o18 = {
    ...f17,
    ...v13,
};
