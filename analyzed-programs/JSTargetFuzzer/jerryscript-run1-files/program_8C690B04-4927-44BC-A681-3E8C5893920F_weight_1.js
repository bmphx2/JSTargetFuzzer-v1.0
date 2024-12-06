new WeakMap();
function f8(a9, a10) {
    const o19 = {
        get b() {
            const o14 = {
                "maxByteLength": 128,
            };
            new ArrayBuffer(128, o14);
            const v18 = new BigInt64Array(a10);
            return v18;
        },
    };
    return o19;
}
f8(1000.0, 3.4069820192468426e+307);
f8(-1000000000000.0, -1000000000000.0);
f8(-1000000000000.0, 3.4069820192468426e+307);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    const t20 = 1024;
    t20.a = 1024;
}
const v26 = new F23();
new F23();
const v28 = new F23();
[1801814284,v28,1801814284,v26];
[F23];
[v28,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v37 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o38 = {
};
const v40 = new Proxy(v37, o38);
const o41 = {
};
new Proxy(v40, o41);
try { F23(); } catch (e) {}
o38.a = v26;
