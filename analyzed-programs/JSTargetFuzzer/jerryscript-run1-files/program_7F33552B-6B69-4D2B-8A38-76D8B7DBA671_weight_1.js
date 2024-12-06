[];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -10760.117000259575;
    this.d = 2.0;
    try {
        886.0009926550579 + 3296n;
    } catch(e11) {
    }
    this.b = -10760.117000259575;
}
const v12 = new F4(-10760.117000259575, -1000000000000.0);
const v13 = new F4(-10760.117000259575, 2.0);
const v14 = new F4(2.0, 2.0);
function f15(a16, a17, a18) {
    const o33 = {
        5: a16,
        [-1000000000000.0]: -10760.117000259575,
        "h": a16,
        "f": F4,
        "g": a18,
        "a": a18,
        __proto__: v12,
        /*
        __proto__: v14,
        */
        valueOf(a20, a21, a22) {
            function f23() {
                return a22;
            }
            return f23;
        },
        valueOf(a25, a26, a27, a28) {
            a25.d = a25;
            try { a16.valueOf(2.0, F4); } catch (e) {}
            return a26;
        },
        [v12]: a16,
    };
    let v36 = -12;
    const v37 = --v36;
    Math.ceil(3);
    const v39 = !v36;
    v37 - -10760.117000259575;
    -v37;
    +v39;
    v36--;
    return o33;
}
const v44 = f15(v14, v13, 2.0);
const v45 = f15(v12, v13, -1000000000000.0);
f15(v45, v12, -1000000000000.0);
const v47 = [-Infinity];
function f50(a51, a52, a53, a54) {
    'use strict';
    delete a53[96111267];
    return a53;
}
const v56 = [];
for (const v59 in [[v56,v56,v56],v56]) {
}
f50(257, 7, v47);
const o61 = {
};
const v63 = new Proxy(f50, o61);
try { v47.push(v45, v63, v44, f50, 2.0); } catch (e) {}
