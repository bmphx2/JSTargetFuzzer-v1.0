const v4 = new Map();
new WeakMap();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
}
const v11 = new F7(770643.2836891008, 1000000.0);
const v12 = new F7(v11, -1000.0);
const v13 = new F7(770643.2836891008, 1000000.0);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v17 = new F14();
new F14();
const v19 = new F14();
[1801814284,v19,1801814284,v17];
const v24 = [F14];
const v25 = [v19,-2];
const v26 = [Infinity,228711.8701669043,1000.0,0.6549688747910699];
const v27 = [0.7717665177211909,-838.3936909463185,-0.0];
const v34 = Symbol.toPrimitive;
const o37 = {
    [v34]() {
        super.d;
    },
};
const v39 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o40 = {
    "b": v27,
    [v26]: v4,
    ...v27,
    __proto__: v27,
    7: -2,
};
const v42 = new Proxy(v39, o40);
const v44 = new BigUint64Array();
const v45 = `
    v44[v45];
`;
eval(v45);
const o49 = {
    "d": v12,
    "f": Proxy,
    "e": v13,
    __proto__: v24,
    "c": v25,
};
new Proxy(v42, o49);
try { F14(); } catch (e) {}
o40.a = v17;
