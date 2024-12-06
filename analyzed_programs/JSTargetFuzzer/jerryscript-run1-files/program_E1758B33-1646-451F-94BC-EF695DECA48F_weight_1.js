new WeakSet();
new Uint16Array(5);
new Float32Array(14, WeakSet, WeakSet);
new Int8Array(525);
new Uint8ClampedArray(15);
new Int8Array(5);
new Uint16Array(177);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v26 = new F23();
new F23();
const v28 = new WeakSet();
[1801814284,v28,1801814284,v26];
[F23,v28,Int8Array];
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
