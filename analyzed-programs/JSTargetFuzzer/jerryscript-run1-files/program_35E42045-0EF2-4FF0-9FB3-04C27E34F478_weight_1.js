function f0() {
    const v4 = new Int8Array();
    const o5 = {
        __proto__: v4,
    };
    try { o5["fill"](); } catch (e) {}
    const o15 = {
        "d": "split",
        [-146556.2404491452]: -146556.2404491452,
        ["split"]: -146556.2404491452,
        [-146556.2404491452](a10, a11) {
            this[f0.toPrimitive];
            return a10;
        },
        ...-4096,
        268435440: -146556.2404491452,
        __proto__: "split",
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
const v18 = f0();
class C19 extends f0 {
    get c() {
        for (let v24 = 0; v24 < 32; v24++) {
            v18["p" + v24] = v24;
        }
        v17[this] ^= -25713;
        const o29 = {
            "maxByteLength": 2683,
        };
        const v31 = new SharedArrayBuffer(2683, o29);
        new Float64Array(v31);
        return v18;
    }
    [-2] = f0;
}
new C19();
const v35 = new C19();
const v36 = new C19();
function f37() {
    return v35;
}
const v44 = [65535n,0n,964329252n];
let v45 = [964329252n,964329252n,v44,v44];
const v46 = [v45,v45,v44,964329252n,0n];
const v47 = [65535n,v45];
const v48 = new f37();
v48.c = v44;
[] = v46;
try { v36["p"](v46, v47, "p", v16); } catch (e) {}
[v44,0n];
const v52 = [v45];
const t54 = "fdNr";
t54[0] = 65535n;
let v59;
try {
const t0 = "localeCompare";
v59 = new t0(v44, v52, v52, 58270);
} catch (e) {}
async function* f60(a61, a62, a63) {
    ({"length":a61,...v45} = a62);
    yield v45;
    await a61;
    yield "fdNr";
    return 964329252n;
}
f60(58270, v47, v59);
