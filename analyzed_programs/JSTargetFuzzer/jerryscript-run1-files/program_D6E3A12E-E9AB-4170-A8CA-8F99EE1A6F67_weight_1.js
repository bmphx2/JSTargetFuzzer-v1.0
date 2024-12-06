new BigUint64Array(1);
new Int32Array(6);
new Uint16Array(9);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
    this[2] = 1024;
    this[Symbol.split];
    new Date();
}
const v20 = new F12();
new F12();
const v22 = new F12();
[1801814284,v22,1801814284,v20];
[F12];
[v22,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v31 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o32 = {
};
const v34 = new Proxy(v31, o32);
const o35 = {
};
new Proxy(v34, o35);
try { F12(); } catch (e) {}
o32.a = v20;
