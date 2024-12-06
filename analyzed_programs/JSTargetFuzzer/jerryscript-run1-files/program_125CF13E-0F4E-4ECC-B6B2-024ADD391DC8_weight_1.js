function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -65536;
    this.b = -65536;
    this.e = -65536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o15 = {
        ...a7,
        "d": a8,
        "h": a8,
        "f": v3,
        "c": v4,
        54: F0,
        __proto__: v3,
        ...v3,
        m(a10, a11) {
            try { a8["o"](a11, v4); } catch (e) {}
            try { v4.valueOf(v5, a8); } catch (e) {}
            return a10;
        },
        ...v4,
        "g": v5,
        1000: v3,
    };
    return o15;
}
f6(v3, v3);
let v17 = f6(v5, v3);
f6(v4, v4);
let v21 = -16;
--v17;
536870889 * v21;
Math.log(536870889);
v21++;
let v31 = 9007199254740991n;
v31--;
new Int8Array(3951);
new Float32Array(471);
new Int8Array(137);
let v41 = 10;
for (;
    (() => {
        const v42 = v41--;
        class C43 {
        }
        return v42;
    })();
    ) {
    function f44() {
        for (let i46 = 0;
            (() => {
                const o47 = {
                };
                return 536870889 < 7;
            })();
            ) {
        }
        const v52 = new Int8Array(471, 137, 3951);
        Object.defineProperty(v52, v52, { writable: true, configurable: true, enumerable: true, value: v52 });
        return v41;
    }
}
