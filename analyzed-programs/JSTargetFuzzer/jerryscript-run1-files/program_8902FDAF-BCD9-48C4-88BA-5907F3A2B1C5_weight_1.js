class C3 {
    o(a5) {
        try {
        } catch(e10) {
            this[SyntaxError] = a5;
        } finally {
            let {"c":v11,"h":v12,...v13} = this;
        }
        return this;
    }
    static #e = -1000000000.0;
    static [-1000000000.0];
}
new C3();
const v15 = new C3();
const v16 = new C3();
function f17() {
    return v15;
}
function f24(a25, a26, a27) {
    const o39 = {
        [v15](a29, a30, a31, a32) {
            throw v15;
            const v37 = new WeakMap();
            function f38() {
                return v37;
            }
            return a27;
        },
        __proto__: v16,
        [a26]: -1.7976931348623157e+308,
        [a25]: a27,
    };
    return o39;
}
const v40 = f24(-1000000000.0, 3.6000727482995885, -1.7976931348623157e+308);
const v41 = f24(-1000000000.0, -1.7976931348623157e+308, 3.6000727482995885);
f24(3.6000727482995885, -1000000000.0, 3.6000727482995885);
Object.defineProperty(v16, "b", { enumerable: true, get: f24, set: f24 });
const v44 = v15[8];
let v45 = 0;
do {
    const v46 = delete v40?.c;
    const v47 = v40[v44];
    [v47,v46,v47,v41,v47];
    [[416588876n,v46],v47,v46];
    v45++;
} while (v45 < 8)
