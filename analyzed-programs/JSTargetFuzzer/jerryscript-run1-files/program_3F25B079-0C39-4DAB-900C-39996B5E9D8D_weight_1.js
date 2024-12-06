function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 6;
    const v6 = this.e;
    try { v6.n(); } catch (e) {}
    this.a = 6;
    this.h = 6;
}
new F0();
const v9 = new F0();
new F0();
new Int8Array(216);
new Uint8Array(7);
const v20 = [-9223372036854775807];
function f22() {
    return f22;
}
const v23 = f22();
const o24 = {
    "defineProperty": v23,
};
const v26 = new Proxy(v20, o24);
for (let v27 = 0; v27 < 5; v27++) {
    Object.defineProperty(v26, v27, { writable: true, configurable: true, enumerable: true, value: 16 });
}
new BigInt64Array(63);
const v29 = [0.6870741677796914,-701272.1335618324,-7.713206722332077e+307,-1.1731311684497034e+308,-1000000.0,1000000.0];
[1.3170762645269846e+308,81.15760339894246,1.0348297552472246e+308,942394.4672295849,NaN,1000000.0];
const v31 = [-224.7378630167956,-66045.47637418157,-1.464166250642584e+308,1e-15,Infinity,-9.466017430179651];
const v33 = +-2;
const v35 = ~-2 * v33;
v9.toString = 7;
v31[Int8Array] = Uint8Array;
delete v29[1];
Uint8Array !== v35 ? Uint8Array : v35;
