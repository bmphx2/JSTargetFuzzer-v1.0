function f0() {
    const o22 = {
        __proto__: "valueOf",
        valueOf(a5, a6) {
            const v8 = Symbol.replace;
            let v9 = this[v8];
            Object.defineProperty(this, "a", { writable: true, enumerable: true, value: 0 });
            0 <= 0;
            let v11;
            try { v11 = ("valueOf").localeCompare(v9, -1000000.0, v8); } catch (e) {}
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = "valueOf";
                this.d = a15;
                this.g = a5;
            }
            new F12(v9, -1000000.0);
            v9 = f0;
            a6.b = f0;
            const o17 = {
                "apply": v9,
                "defineProperty": Symbol,
                "deleteProperty": v9,
                "getOwnPropertyDescriptor": Symbol,
                "getPrototypeOf": f0,
                "has": f0,
                "isExtensible": f0,
            };
            new Proxy("valueOf", o17);
            new F12(F12, v11);
            const v21 = new F12(v11, 0);
            return v21;
        },
    };
    return o22;
}
const v23 = f0();
const v24 = f0();
const v25 = f0();
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v23;
    this.f = f0;
    this.c = f0;
}
new F26(v25);
new F26(v25);
new F26(v24);
new WeakSet();
new ArrayBuffer();
const v43 = new Float32Array();
const v46 = new RegExp(3);
v43[v46];
