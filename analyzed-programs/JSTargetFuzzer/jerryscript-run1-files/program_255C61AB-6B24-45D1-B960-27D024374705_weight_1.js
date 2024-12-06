function f0() {
    const o9 = {
        ..."m",
        p(a5) {
            const v6 = "string" !== "m";
            const v7 = this & "string";
            try { ("toString").repeat(v7); } catch (e) {}
            return v6;
        },
        "d": "string",
        "c": "string",
        __proto__: "string",
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
class C13 extends f0 {
    constructor(a15) {
        super();
        try { new f0(...this, ...a15, v10, this, this, ...v11); } catch (e) {}
        this.c;
        for (let v18 = 0; v18 < 32; v18++) {
            this["p" + v18] = v18;
        }
    }
}
const v21 = new C13(C13);
const v22 = new C13(v11);
const v23 = new C13(v10);
function f24(a25, a26, a27, a28) {
    const o31 = {
        "g": a27,
        "c": v21,
        get f() {
            v23[2848] = v11;
            a27.a = v10.c;
            Object.defineProperty(a26, "d", { enumerable: true, get: f0 });
            return a25;
        },
        "a": a28,
    };
    return o31;
}
f24(v10, v12, v12, v21);
f24(v21, v11, f24(v11, v21, C13, C13), v22);
new BigInt64Array(256);
const v43 = new Uint32Array(227);
new Uint16Array(129);
function F47(a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a50;
}
new F47(256, 129);
new F47(v43, 227);
new F47(v43, 129);
function f54() {
}
new Uint8Array(227);
let v68 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v68);
v68 /= v68;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
