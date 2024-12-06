class C6 {
    n(a8, a9, a10) {
        9 << a8;
        const v14 = Symbol.iterator;
        const o25 = {
            [v14]() {
                try { null.set(); } catch (e) {}
                let v18 = 10;
                const o24 = {
                    next() {
                        v18--;
                        const v22 = v18 == 0;
                        const o23 = {
                            "done": v22,
                            "value": v18,
                        };
                        return o23;
                    },
                };
                return o24;
            },
        };
        return a9;
    }
}
new C6();
new C6();
new C6();
new Uint8ClampedArray(127);
new Int32Array(8);
new BigUint64Array(6);
function f38(a39, a40, a41) {
    return a41;
}
class C42 extends f38 {
}
try { C42(); } catch (e) {}
