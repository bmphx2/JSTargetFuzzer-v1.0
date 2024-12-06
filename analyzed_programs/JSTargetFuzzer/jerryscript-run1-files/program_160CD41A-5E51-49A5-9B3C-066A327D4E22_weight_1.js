new Int32Array(151);
new Int8Array(63);
new Int16Array(9);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v15 = new F12();
new F12();
const v17 = new F12();
const o21 = {
    set a(a19) {
    },
    get a() {
        return this;
    },
};
const o26 = {
    get d() {
        this[this] *= 255;
        return this;
    },
};
[1801814284,v17,1801814284,v15];
[F12];
[v17,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v33 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o34 = {
};
const v36 = new Proxy(v33, o34);
const o37 = {
};
new Proxy(v36, o37);
try { F12(); } catch (e) {}
o34.a = v15;
([346223919]).lastIndexOf(-9223372036854775808, -65536);
([]).sort();
