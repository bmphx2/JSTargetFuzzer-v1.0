function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 368236117;
    this.g = a12;
}
new F9(8, 1073741823, -27196);
new F9(1073741824, 1073741823, -27196);
new F9(2147483649, 2123498665, -27196);
const v20 = [65535n,0n,964329252n];
let v21 = [964329252n,964329252n,v20,v20];
const v22 = [v21,v21,v20,964329252n,0n];
const v23 = [65535n,v21];
[v22,0n];
const v25 = [v21];
const t14 = "fdNr";
t14[0] = 65535n;
let v32;
try {
const t0 = "localeCompare";
v32 = new t0(v20, v25, v25, 58270);
} catch (e) {}
async function* f33(a34, a35, a36) {
    ({"length":a34,...v21} = a35);
    yield v20;
    await a34;
    yield "fdNr";
    return a34;
}
f33(58270, v23, v32);
