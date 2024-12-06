[];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -10760.117000259575;
    this.d = 2.0;
    this.b = -10760.117000259575;
}
const v8 = new F4(-10760.117000259575, -1000000000000.0);
const v9 = new F4(-10760.117000259575, 2.0);
const v10 = new F4(2.0, 2.0);
function f11(a12, a13, a14) {
    const o29 = {
        5: a12,
        [-1000000000000.0]: -10760.117000259575,
        "h": a12,
        "f": F4,
        "g": a14,
        "a": a14,
        __proto__: v8,
        /*
        __proto__: v10,
        */
        valueOf(a16, a17, a18) {
            function f19() {
                return a18;
            }
            return f19;
        },
        valueOf(a21, a22, a23, a24) {
            a21.d = a21;
            try { a12.valueOf(2.0, F4); } catch (e) {}
            return a22;
        },
        [v8]: a12,
    };
    let v32 = -12;
    const v33 = --v32;
    Math.ceil(3);
    const v35 = !v32;
    v33 - -10760.117000259575;
    -v33;
    +v35;
    v32--;
    return o29;
}
const v40 = f11(v10, v9, 2.0);
const v41 = f11(v8, v9, -1000000000000.0);
f11(v41, v8, -1000000000000.0);
const v43 = [-Infinity];
function f46(a47, a48, a49, a50) {
    'use strict';
    delete a49[96111267];
    return a49;
}
const v52 = [];
for (const v55 in [[v52,v52,v52],v52]) {
}
f46(257, 7, v43);
const o57 = {
};
const v59 = new Proxy(f46, o57);
try { v43.push(v41, v59, v40, f46, 2.0); } catch (e) {}
