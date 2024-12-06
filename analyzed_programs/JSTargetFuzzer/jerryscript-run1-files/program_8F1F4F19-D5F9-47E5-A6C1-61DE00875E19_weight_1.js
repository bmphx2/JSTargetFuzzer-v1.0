function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -14834;
}
const v3 = new F0();
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
f9(v5, v4, v5);
f9(v3, v3, v4);
const v28 = [];
const v29 = [v28];
try {
    v28.toString = v28[127];
    SyntaxError(v29);
} catch(e33) {
}
const v34 = [];
class C35 {
    valueOf(a37, a38) {
        const v39 = `
            const o44 = {
                m(a41, a42, a43) {
                    return v39;
                },
            };
            const t37 = v34.__proto__;
            delete t37?.d;
        `;
        eval(v39);
    }
}
const v49 = new C35();
async function f50(a51, a52) {
    a51 /= C35;
    return C35;
}
f50(v49);
