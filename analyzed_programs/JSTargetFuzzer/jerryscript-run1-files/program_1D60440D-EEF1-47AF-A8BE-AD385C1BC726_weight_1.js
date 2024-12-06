function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -14834;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    const o24 = {
        ...v5,
        set d(a14) {
            new Uint8ClampedArray(2476);
            new Int8Array(512);
            new Int32Array(4096);
        },
    };
    return o24;
}
f9(v3, v4, v3);
let v26 = f9(v5, v4, v5);
v26 %= v26;
v3 = v4;
v5[1073741825] = 1073741825n;
try { v4["toString"](f9, F0); } catch (e) {}
f9(v3, v3, v4);
const v30 = [];
const v31 = [v30];
try {
    v30.toString = v30[127];
    SyntaxError(v31);
} catch(e35) {
}
const v36 = [];
class C37 {
    valueOf(a39, a40) {
        const v41 = `
            const o46 = {
                m(a43, a44, a45) {
                    return v41;
                },
            };
            const t41 = v36.__proto__;
            delete t41?.d;
        `;
        new Date();
        super.e;
        new WeakSet();
        eval(v41);
    }
}
const v57 = new C37();
async function f58(a59, a60) {
    a59 /= C37;
    return C37;
}
f58(v57);
