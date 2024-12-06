function f3() {
    return 512n;
}
const v4 = [512n,f3,1736495727n,f3];
const v5 = [1736495727n,-4294967295n,v4,-4294967295n,1736495727n];
const v6 = [512n,v4,1736495727n];
function f7() {
    return v5;
}
class C8 extends f7 {
    static get e() {
        v5[3] = this;
        Object.defineProperty(v6, f7, { configurable: true, get: f3 });
        return f7;
    }
    static m(a11, a12, a13, a14) {
        this.f = a14;
        const o17 = {
            "maxByteLength": 255,
        };
        const v19 = new SharedArrayBuffer(91, o17);
        new Int32Array(v19);
        return v4;
    }
}
new C8();
new C8();
const v24 = new C8();
const v28 = [1024,-536870912,-7939];
const v29 = [127,-4294967296];
const v30 = [1262143293,15,46313,5,2147483649];
function f31() {
    return v30;
}
const v32 = [f31,f31,v29];
const v33 = [v32,v28,f31,v32];
[v33,v33];
new Float64Array(v32);
v24[Symbol.toPrimitive];
new Map();
const v45 = new Uint32Array(1);
new f31(2);
const v51 = Symbol.toPrimitive;
const o60 = {
    [v51]() {
        v32[this] >>>= 1;
        Math.min(-2);
        let v58 = 1859580190 % 4096;
        --v58;
        return 4096;
    },
};
const v63 = [65535n,0n,964329252n];
let v64 = [964329252n,964329252n,v63,v63];
const v65 = [v64,v64,v63,964329252n,0n];
const v66 = [65535n,v64];
function f67(a68, a69, a70, a71) {
    return a71;
}
f67(1, 1736495727n, 65535n, -2);
[v65,0n];
const v77 = [v64];
const t59 = "fdNr";
t59[0] = 65535n;
let v84;
try {
const t0 = "localeCompare";
v84 = new t0(v63, v77, 964329252n, 58270);
} catch (e) {}
async function* f85(a86, a87, a88) {
    ({"length":a86,...v64} = v45);
    await (yield v63);
    yield "fdNr";
    return a86;
}
f85(58270, v66, v84);
