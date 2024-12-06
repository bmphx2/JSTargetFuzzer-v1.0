new Set();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.g = Set;
    this.b = a10;
}
new F8("symbol", "268435439", "1000", 1392339174);
new F8("symbol", "1000", "268435439", -34055);
new F8("268435439", "268435439", "symbol", 1392339174);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    class C22 {
        static o(a24, a25, a26) {
            return eval;
        }
    }
    this.e = 1024;
    this.a = 1024;
}
const v29 = new F20();
new F20();
const v31 = new F20();
[1801814284,v31,1801814284,v29];
[F20];
[v31,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v40 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o41 = {
};
const v43 = new Proxy(v40, o41);
const o44 = {
};
new Proxy(v43, o44);
try { F20(); } catch (e) {}
o41.a = v29;
