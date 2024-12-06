function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.f = f0;
    this.g = f0;
    const v4 = Infinity.iterator;
    const o13 = {
        [v4]() {
            let v6 = 10;
            const o12 = {
                next() {
                    v6--;
                    const v10 = v6 == 0;
                    const o11 = {
                        "done": v10,
                        "value": v6,
                    };
                    return o11;
                },
            };
            return o12;
        },
    };
}
const v14 = new F1();
const v15 = new F1();
const v16 = new F1();
function f17(a18) {
    const o23 = {
        set a(a20) {
            [];
            super.h = a18;
            a18.e ^= a20;
            try { new a20(F1, v16, a18, v16); } catch (e) {}
            Object.defineProperty(a18, a18, { writable: true, configurable: true, set: f0 });
        },
        "f": v16,
        __proto__: v15,
        ...v14,
    };
    return o23;
}
f17(v14);
f17(v15);
const v26 = f17(v14);
[-256];
const v28 = [9223372036854775807];
[-52062,416376079,7,176740795,81020990,2];
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
if (f17 != v26) {
    try { v36(v35, v26, 181); } catch (e) {}
} else {
    typeof v26 === "symbol";
}
try { v34["abs"](181, v36, v34); } catch (e) {}
const v48 = new Uint16Array(v36);
for (let i54 = 0;
    (() => {
        v28[Symbol.toStringTag] = 1;
        "2147483648" in v14;
        v48.e = 2;
        return i54 < 2;
    })();
    i54++) {
    const v63 = new Function("x");
    v63.name;
}
Function();
