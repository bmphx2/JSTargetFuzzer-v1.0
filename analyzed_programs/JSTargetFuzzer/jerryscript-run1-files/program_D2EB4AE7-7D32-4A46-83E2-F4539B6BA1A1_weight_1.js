function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.length = -9007199254740990;
}
new F0();
new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967296;
    this.f = a11;
}
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F14();
class C17 extends F14 {
    constructor(a19, a20) {
        super();
        this.__proto__ = v16;
    }
}
new C17();
new F9(128, -1989882941, 128);
new F9(128, 128, 128);
const v24 = new F9(-4294967296, -1989882941, 128);
const v28 = [-2n,0n,964329252n,v24,v16,F0];
let v29 = [964329252n,964329252n,v28,v28];
const v30 = [v29,v29,v28,964329252n,0n];
const v31 = [-2n,v29];
[v30,0n];
const v33 = [v29];
const t32 = "fdNr";
t32[0] = -2n;
let v40;
try {
const t0 = "localeCompare";
v40 = new t0(v28, v33, v33, 58270);
} catch (e) {}
async function* f41(a42, a43, a44) {
    ({"length":a42,...v29} = a43);
    yield v28;
    await a42;
    yield "fdNr";
    return a42;
}
f41(58270, v31, v40);
