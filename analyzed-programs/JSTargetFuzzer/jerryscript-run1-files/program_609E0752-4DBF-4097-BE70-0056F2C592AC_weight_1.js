new Int32Array(9);
new BigUint64Array(129);
new Int32Array(0);
function f10() {
    return 9;
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v14 = new F11();
new F11();
const v16 = new F11();
[1801814284,v16,1801814284,v14];
[F11];
[v16,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v25 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o26 = {
};
const v28 = new Proxy(v25, o26);
const o29 = {
};
new Proxy(v28, o29);
try { Proxy(); } catch (e) {}
o26.a = v14;
