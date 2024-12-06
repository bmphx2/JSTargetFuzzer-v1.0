const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.g = v0;
    this.b = v0;
}
new F1();
new F1();
new F1();
new Uint16Array(239);
new Uint16Array(3437);
new BigInt64Array(4096);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v18 = new F15();
new F15();
const v20 = new F15();
[1801814284,v20,1801814284,v20];
[F15];
[v20,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v29 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o30 = {
};
const v32 = new F1(v29, o30);
const o33 = {
};
new Proxy(v32, o33);
try { F15(); } catch (e) {}
o30.a = v18;
