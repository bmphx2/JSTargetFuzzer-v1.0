function f0() {
}
function f1() {
    const o21 = {
        __proto__: f0,
        ...f0,
        "h": f0,
        "e": f0,
        toString() {
            class C5 {
            }
            async function f6(a7, a8) {
                await 512;
                return C5;
            }
            f6();
            const v11 = Symbol.iterator;
            const o20 = {
                [v11]() {
                    let v13 = 10;
                    const o19 = {
                        next() {
                            v13--;
                            const v17 = v13 == 0;
                            const o18 = {
                                "done": v17,
                                "value": v13,
                            };
                            return o18;
                        },
                    };
                    return o19;
                },
            };
            return o20;
        },
    };
    return o21;
}
f1();
f1();
f1();
const v27 = new BigInt64Array(64);
const v28 = [v27];
try { v28.toLocaleString(v27, v28); } catch (e) {}
const v36 = [];
class C37 {
    valueOf(a39, a40) {
        const v41 = `
            RegExp.prototype ^= 0.9875862750480174;
            const t50 = v36.__proto__;
            delete t50?.d;
        `;
        eval(v41);
    }
}
const v48 = new C37();
async function f49(a50, a51) {
    return a50 /= C37;
}
f49(v48);
