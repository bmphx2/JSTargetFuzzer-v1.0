const v2 = new Int16Array(4096);
const v5 = new Int8Array(255);
Object.defineProperty(v5, Int8Array, { enumerable: true, value: 0 });
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v2;
    this.c = a15;
    this.g = Int16Array;
}
new F11(4096, 4096, 4096);
new F11(4096, 255, 536870912);
new F11(-31127, -57308, 255);
v5[6] = -31127;
new Uint8Array(0);
const v27 = [8,7,-752496043,-128,236203376,1848165509,11,-8,-15,2147483649];
[9488,1304112047,7,-4096,-9223372036854775807,4];
const v29 = [866402425,256,10,38054,18126,3,1228256356];
function f30(a31, a32) {
    const o33 = {
        "h": v27,
        "g": a31,
        "b": -24765020,
    };
    return o33;
}
f30(v27, f30(v29, v29));
f30(v27, 0);
const v39 = [-421.64567039388294,-1e-15,NaN,0.0,1.07640193722729e+308,975.4811346135555];
function f40(a41, a42) {
    const o43 = {
    };
    return o43;
}
const v44 = f40(f40, f40);
const o45 = {
    "get": f40,
    "set": f40,
};
const v47 = new Proxy(v44, o45);
v47.g >>= v39;
