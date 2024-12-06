function f6() {
    return 1542164476;
}
function f7() {
    return 15083n;
}
function f8(a9, a10, a11, a12) {
    const o28 = {
        "a": a10,
        get f() {
            Object.defineProperty(this, 3411, { writable: true, enumerable: true, get: f7 });
            return a12;
        },
        p(a18, a19, a20) {
            const o23 = {
                "maxByteLength": 3,
            };
            const v25 = new SharedArrayBuffer(3, o23);
            const v27 = new Float32Array(v25);
            return v27;
        },
    };
    return o28;
}
const v29 = f8(f6, -9007199254740991, 1542164476, -9007199254740991);
f8(f7, 9007199254740991, f6, 1542164476);
f8(v29, -9007199254740991, v29, 1542164476);
class C33 {
}
function f34() {
    return C33;
}
const v35 = new C33();
class C36 extends f8 {
    constructor(a38, a39, a40, a41) {
        try {
            return v35;
        } catch(e42) {
        }
    }
}
new C36();
