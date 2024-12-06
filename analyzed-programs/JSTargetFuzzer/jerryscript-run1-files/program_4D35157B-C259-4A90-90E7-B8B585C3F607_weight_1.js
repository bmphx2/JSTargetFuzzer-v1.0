const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f3() {
        return f3;
    }
    class C4 extends f3 {
        constructor(a6, a7) {
            const o8 = {
            };
            return o8;
        }
    }
    new C4(C4, f3);
    this.f = v0;
    this.h = v0;
}
const v10 = new F1();
new F1();
new F1();
const v13 = [v10,F1];
[v13,F1,v10,v13];
[F1,v10,F1];
new Map();
const v18 = [1024,-536870912,-7939];
const v19 = [127,-4294967296];
const v20 = [1262143293,15,46313,5,2147483649];
function f21() {
    return v20;
}
const v22 = [f21,f21,v19];
const v23 = [v22,v18,f21,v22];
[v23,v23];
new Float64Array(v22);
const v30 = new Uint32Array(1);
new f21(2);
const v37 = [65535n,0n,964329252n];
let v38 = [964329252n,964329252n,v37,v37];
const v39 = [v38,v38,v37,964329252n,0n];
const v40 = [65535n,v38];
[v39,0n];
const v42 = [v38];
const t40 = "fdNr";
t40[0] = 65535n;
let v49;
try {
const t0 = "localeCompare";
v49 = new t0(v37, v42, 964329252n, 58270);
} catch (e) {}
async function* f50(a51, a52, a53) {
    ({"length":a51,...v38} = v30);
    await (yield v37);
    yield "fdNr";
    return a51;
}
f50(58270, v40, v49);
