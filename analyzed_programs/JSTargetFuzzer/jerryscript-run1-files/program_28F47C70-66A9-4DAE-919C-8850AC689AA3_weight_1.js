function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v7 = new F3(-57929, -2147483647);
new F3(-2147483647, -2147483647);
const v9 = new F3(-57929, -57929);
function f14(a15, a16) {
    a16 == a15;
    return 4;
}
f14(v9, v7);
new Uint32Array(20);
const o25 = {
    "apply": f14,
    "construct": f14,
    "deleteProperty": f14,
    "get": f14,
    "has": f14,
    "isExtensible": f14,
    "ownKeys": f14,
};
new Proxy(v9, o25);
new Uint16Array(7);
new Float64Array(127);
typeof -268435456;
