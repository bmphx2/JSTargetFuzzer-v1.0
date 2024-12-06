function f0() {
}
const v1 = [f0,f0,f0];
const v2 = [v1,v1,f0];
const v3 = [v2,v2,v1,v2];
const v4 = [v1,v3,v2];
const v5 = [v4,v4];
[v5,v3,v3,v5];
const o10 = {
    "apply": f0,
    "call": f0,
    "construct": f0,
    "defineProperty": f0,
    "deleteProperty": f0,
    "get": f0,
    "getPrototypeOf": f0,
    "ownKeys": f0,
    "preventExtensions": f0,
    "set": f0,
    "setPrototypeOf": f0,
};
new Proxy(v4, o10);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v16 = new F13();
new F13();
const v18 = new F13();
[1801814284,v18,1801814284,v16];
[F13];
[v18,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
class C27 {
    constructor(a29) {
        Reflect.setPrototypeOf(("SevCf").trimStart, this);
    }
}
new C27();
[0.7717665177211909,-838.3936909463185,-0.0];
const v35 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o36 = {
};
const v38 = new Proxy(v35, o36);
const o39 = {
};
new Proxy(v38, o39);
try { F13(); } catch (e) {}
o36.a = v16;
