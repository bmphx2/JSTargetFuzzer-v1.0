function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
new F4(-1.766301779488572e+308, -1.766301779488572e+308);
new Float32Array(129);
new Int8Array(806);
new Uint8Array(1);
new F4(-1.766301779488572e+308, 1.0);
new F4(1000000000.0, 1000000000.0);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v26 = new F23();
new F23();
const v28 = new F23();
[1801814284,v28,1801814284,v26];
[F23];
[v26,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v37 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o38 = {
};
const v40 = new Proxy(v37, o38);
const o41 = {
};
new Proxy(v40, v37);
try { F23(); } catch (e) {}
o38.a = v26;
