class C9 {
    valueOf(a11, a12) {
        const t2 = -1000002560n;
        t2();
    }
}
const v14 = new C9();
async function f15(a16, a17) {
    this | a16;
    return a17;
}
f15(v14);
function f21() {
    return -20500;
}
function f22() {
    return 1470131567n;
}
function f23() {
    return -8n;
}
function f24(a25, a26, a27) {
    const o36 = {
        ...a26,
        toString(a29, a30, a31) {
            const v32 = super.f;
            v32[9] = v32;
            a27 = a29;
            const o33 = {
                "apply": f22,
                "call": f21,
                "construct": a26,
                "deleteProperty": f21,
                "get": f22,
                "getOwnPropertyDescriptor": f23,
                "getPrototypeOf": f22,
                "e": v14,
                [a30]: this,
                "a": 270231913,
                [this]: a30,
                "g": a29,
                "has": f23,
                "isExtensible": f23,
                "ownKeys": f21,
                "setPrototypeOf": a27,
            };
            new Proxy(a26, o33);
            return 270231913;
        },
    };
    return o36;
}
f24(1470131567n, 270231913, -1000002560n);
const v38 = f24(-1000002560n, 1073741825, -8n);
f24(-8n, 1073741825, 1470131567n);
const v42 = new Float32Array(10657);
new BigInt64Array(702);
try { v42.set(v38); } catch (e) {}
