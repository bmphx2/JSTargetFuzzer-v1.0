function f3() {
    return 4294967295;
}
for (let v11 = 0; v11 < 35; v11++) {
    new Map();
}
const v16 = new Array(268435441);
let v18 = 4096;
function f20(a21, a22, a23, a24) {
    const o34 = {
        "g": v18,
        ...a24,
        "e": a22,
        set b(a26) {
            function F27(a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a29;
            }
            new F27(a24, 129);
            new F27(a23, a23);
            new F27(F27, 481111932);
        },
    };
    return o34;
}
let v35 = f20(v18, 481111932, 129, v16);
const v36 = f20(268435441, 481111932, 268435441, f20);
const v37 = f20(v35, v18, 481111932, v18);
v35.g;
try {
    let v39;
    try { v39 = v35.isSealed(); } catch (e) {}
    v35 = v39;
    v18 = v39;
} catch(e40) {
    v36[2594153873] = -128;
    v18[Symbol.unscopables] = -128;
    e40[0] = e40;
    const v47 = Symbol.iterator;
    const o56 = {
        [v47]() {
            let v49 = 10;
            const o55 = {
                next() {
                    v49--;
                    const v53 = v49 == 0;
                    const o54 = {
                        "done": v53,
                        "value": v49,
                    };
                    return o54;
                },
            };
            return o55;
        },
    };
    try { e40(Array); } catch (e) {}
}
new Int32Array(1959);
Array.__proto__;
v37[4294967296] = 4294967296;
try { new v18(...Math, Int32Array, ...Math, 4294967295, ...v16); } catch (e) {}
new Int32Array(512, -3);
new Int16Array(213);
new Date();
