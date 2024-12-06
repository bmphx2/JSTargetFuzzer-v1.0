function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -65372;
    this.f = -65372;
    this.b = -65372;
}
new F0();
new F0();
new F0();
new Int16Array(2);
new Int16Array(5);
new Float32Array(3668);
const v18 = [65535n,0n,964329252n];
let v19 = [964329252n,964329252n,v18,v18];
const v20 = [v19,v19,v18,964329252n,0n];
const v21 = [65535n,v19];
[v20,0n];
let v23 = [v19];
new Float32Array(4096);
let v33 = [2147483648,-923715900];
let v34 = 13636;
({"c":v34,"length":v23,...v33} = v23);
const t22 = "fdNr";
t22[0] = 65535n;
let v35;
try {
const t0 = "localeCompare";
v35 = new t0(v18, v23, v23, 58270);
} catch (e) {}
async function* f36(a37, a38, a39) {
    for (let i42 = 0, i43 = 10; i42 < i43; i42++, i43--) {
        a37 >>> a39;
    }
    ({"length":a37,...v19} = a38);
    yield v18;
    await a37;
    yield "fdNr";
    return a37;
}
f36(58270, v21, v35);
