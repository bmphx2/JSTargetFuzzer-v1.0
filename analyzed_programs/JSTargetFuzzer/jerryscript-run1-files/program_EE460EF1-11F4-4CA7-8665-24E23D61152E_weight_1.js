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
function f15() {
    try {
    } finally {
        function F16() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v18 = new F16();
        return v18;
    }
    return f15;
}
f15();
const v20 = [];
function f21() {
    Object.defineProperty(v20, "d", { value: 1e-15 });
    return 1e-15;
}
f21();
f21();
for (const v25 in v14) {
}
