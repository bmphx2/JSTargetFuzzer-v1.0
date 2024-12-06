function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -6;
}
new F0();
new F0();
new F0();
const v8 = new BigInt64Array(4);
new Uint32Array(10);
new Uint8Array(4008);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    BigInt64Array.e = 1024;
    this.a = v8;
}
const v18 = new F15();
new F15();
const v20 = new F15();
[1801814284,v20,1801814284,v18];
[v18];
[v20,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v29 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o30 = {
};
const v32 = new Proxy(v29, o30);
const o33 = {
};
new Proxy(v32, o33);
try { F15(); } catch (e) {}
o30.a = v18;
