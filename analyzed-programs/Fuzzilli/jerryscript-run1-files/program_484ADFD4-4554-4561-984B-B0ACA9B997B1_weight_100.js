function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1847367999;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f7(a8, a9) {
    const o17 = {
        "h": v5,
        __proto__: v5,
        "g": null,
        toString(a11, a12) {
            this.d = a8;
            a12 - a9;
            return this;
        },
        "d": a8,
        16: a8,
        ...v4,
    };
    return o17;
}
const v18 = f7(v5, null);
f7(v5, v18);
f7(v3, f7);
const v23 = new Uint8ClampedArray(512);
const v26 = new Float64Array(7);
const v29 = new BigInt64Array(3327);
v29.valueOf = f7;
const v30 = v29[v18];
try { v30(v29, v23, v23, v30); } catch (e) {}
Object.defineProperty(v29, v26, { configurable: true, enumerable: true, value: v26 });
const v32 = /AV(?=.)/vym;
/[\cz]25jRzExyz??/vyms;
const v35 = [v29,/Ij*/vgmsd,v32];
[v32,F0,F0,7,Float64Array];
[f7,v35,v29];
