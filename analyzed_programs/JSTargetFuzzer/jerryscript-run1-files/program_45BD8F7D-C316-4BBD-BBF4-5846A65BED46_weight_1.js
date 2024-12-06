function f0() {
    const o19 = {
        __proto__: "valueOf",
        valueOf(a5, a6) {
            const v8 = Symbol.replace;
            const v9 = this[v8];
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
            new F12(F12, v11);
            const v18 = new F12(v11, 0);
            return v18;
        },
    };
    return o19;
}
const v20 = f0();
const v21 = f0();
const v22 = f0();
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v20;
    this.f = f0;
    this.c = f0;
}
new F23(v22);
new F23(v22);
new F23(v21);
new WeakSet();
new ArrayBuffer();
const v40 = new Float32Array();
const v43 = new RegExp(3);
v40[v43];
