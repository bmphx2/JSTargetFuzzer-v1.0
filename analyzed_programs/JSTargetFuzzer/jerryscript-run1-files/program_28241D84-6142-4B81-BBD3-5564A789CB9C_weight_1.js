const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
    this.d = a4;
    this.g = v1;
}
new F2(v1, F2);
const v7 = new F2(v1, WeakMap);
const v8 = new F2(WeakMap, v7);
[[[F2,v1,F2],v8]];
const v14 = new Uint8Array();
const v16 = new Uint16Array(45103);
delete v14[v16];
[-1000.0,-2.2250738585072014e-308,-1000000000000.0,2.2250738585072014e-308,-5.0];
[5.820842394665714e+307];
[917671.0651182667,895369.1462107722];
const t13 = [3,-442752321,-1397339341,4294967296];
t13.e = -4096;
("dotAll")["padStart"](28481, "function");
new BigInt64Array(64);
[BigInt64Array];
Promise.resolve(Promise);
function f37() {
    return Promise;
}
const o39 = {
    ..."source",
};
delete o39[1];
