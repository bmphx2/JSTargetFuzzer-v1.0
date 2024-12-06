function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.NaN = "n";
}
const v6 = new F3("string");
const v7 = new F3("65537", "string", v6);
new F3(v7);
function f9() {
    return "string";
}
new WeakMap();
const v12 = [];
const v14 = [[v12,v12,v12],v12];
const v15 = [];
function f16() {
    Object.defineProperty(v15, "d", { value: 1e-15 });
    return 1e-15;
}
f16();
f16();
for (const v20 in v14) {
}
