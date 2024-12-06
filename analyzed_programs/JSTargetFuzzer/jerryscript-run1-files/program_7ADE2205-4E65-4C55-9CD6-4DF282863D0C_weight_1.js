function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -12;
    this.g = 536870887;
    this.c = 536870887;
}
const v6 = new F3(-12);
const v7 = new F3(536870887);
const v8 = new F3(536870887);
function f12(a13, a14, a15) {
    const o30 = {
        2937742537: a15,
        p(a17, a18, a19, a20) {
            Object.defineProperty(a20, a18, { writable: true, configurable: true, value: -12 });
            v6.__proto__ = this;
            const o24 = {
                "apply": f12,
                "call": f12,
                "construct": f12,
                "defineProperty": f12,
                "deleteProperty": f12,
                "get": f12,
                "getOwnPropertyDescriptor": f12,
                "getPrototypeOf": f12,
                "has": f12,
                "isExtensible": a14,
                "ownKeys": f12,
                "preventExtensions": a20,
                "setPrototypeOf": f12,
            };
            new Proxy(a20, o24);
            this.__proto__ = a20;
            return 1748969737;
        },
        1329: -1658940221,
        "h": v8,
        1024: a15,
        "g": a15,
        "d": 50874,
        "e": v8,
        "c": 50874,
    };
    return o30;
}
const v31 = f12(50874, v7, v8);
const v32 = f12(-12, v6, v6);
function f33(a34, a35, a36, a37) {
    return v32;
}
const v41 = f33(v31, f33, v32, f33);
f12(-1658940221, v8, v6);
function F43() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this[50874];
    const v47 = v41.h;
    try { v41["p"](...v41, 1024, f12, -12); } catch (e) {}
    for (let v50 = 0; v50 < 32; v50++) {
        v47["p" + v50] = v50;
    }
    this.a = 1024;
}
const v53 = new F43();
new F43();
const v55 = new F43();
let v56 = -2;
[1801814284,v55,1801814284,v53];
[F43];
[v55,v56];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v64 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o65 = {
};
const v67 = new Proxy(v64, o65);
--v56;
const o75 = {
};
new Proxy(v67, o75);
try { F43(); } catch (e) {}
o65.a = v53;
