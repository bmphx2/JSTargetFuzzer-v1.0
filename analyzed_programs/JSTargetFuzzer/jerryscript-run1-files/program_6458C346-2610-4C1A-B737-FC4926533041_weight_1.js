function f9() {
    return -2147483648;
}
function f10() {
    return -2147483648;
}
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
    this.c = a13;
}
new F11("string", "string", "toString", 10);
const v18 = new F11("4", "string", 10, -2147483648);
new F11("string", 4294967296, f9, v18);
async function f20(a21, a22) {
    f20();
    return a21;
}
f20();
