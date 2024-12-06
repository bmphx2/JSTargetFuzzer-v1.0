function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1024n;
    this.h = 1024n;
}
new F3(-32747n, 1024n);
new F3(1024n, -1531825683n);
new F3(-1531825683n, 1024n);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v19 = new F16();
new F16();
const v21 = new F16();
[1801814284,v21,1801814284,v19];
[F16];
[v21,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v30 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
new WeakSet();
const o36 = {
};
const v38 = new Proxy(v30, o36);
const o39 = {
};
new Proxy(v38, o39);
try { v38(); } catch (e) {}
o36.a = v19;
