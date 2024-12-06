new Map();
new WeakMap();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
}
const v11 = new F7(770643.2836891008, 1000000.0);
new F7(v11, -1000.0);
new F7(770643.2836891008, 1000000.0);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v17 = new F14();
new F14();
const v19 = new F14();
[1801814284,v19,1801814284,v17];
[F14];
[v19,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v28 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o29 = {
};
const v31 = new Proxy(v28, o29);
const v33 = new BigUint64Array();
const v34 = `
    v33[v34];
`;
eval(v34);
const o38 = {
};
new Proxy(v31, o38);
try { F14(); } catch (e) {}
o29.a = v17;
