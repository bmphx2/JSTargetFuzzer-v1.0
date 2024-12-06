class C3 {
    n(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return "n";
    }
}
new C3();
const v19 = new C3();
new C3();
new Int32Array(6);
new Uint8ClampedArray(669);
const v29 = new Float64Array(3806);
v29.byteLength;
let v34 = 10;
for (; v34--;) {
    ("n").length;
    try { v19.n(); } catch (e) {}
}
