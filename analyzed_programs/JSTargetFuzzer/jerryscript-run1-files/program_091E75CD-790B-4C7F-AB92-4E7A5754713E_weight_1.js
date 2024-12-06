new Uint32Array(4);
new Uint16Array(128);
const v8 = new Uint8Array(2);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    F9.f = v8;
    this.a = 128;
}
new F9(128, 2, 4);
const v15 = new F9(2, 4, 2);
new F9(v15, 4, 2);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v20 = new F17();
new F17();
const v22 = new F17();
[1801814284,v22,1801814284,v20];
[F17];
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
try { F17(); } catch (e) {}
o32.a = v20;
