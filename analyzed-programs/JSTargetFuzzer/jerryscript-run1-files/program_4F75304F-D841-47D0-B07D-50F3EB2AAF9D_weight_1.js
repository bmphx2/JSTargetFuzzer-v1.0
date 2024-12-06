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
                "isExtensible": f12,
                "ownKeys": f12,
                "preventExtensions": f12,
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
f12(50874, v7, v8);
f12(-12, v6, v6);
f12(-1658940221, v8, v6);
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
}
const v37 = new F34();
new F34();
const v39 = new F34();
let v40 = -2;
[1801814284,v39,1801814284,v37];
[F34];
[v39,v40];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v48 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o49 = {
};
const v51 = new Proxy(v48, o49);
--v40;
const o59 = {
};
new Proxy(v51, o59);
try { F34(); } catch (e) {}
o49.a = v37;
