function f3(a4) {
    return arguments;
}
const v6 = f3(5, Uint32Array);
function f7(a8, a9) {
    const o10 = {
        ...v6,
    };
    return o10;
}
f3();
f7();
const v17 = new Int16Array(60);
const v20 = new Float64Array(5);
let v21 = 0;
do {
    [] = v20;
    Object.defineProperty(v17, f7, { configurable: true, set: f3 });
    v21++;
} while (v21 < 6)
new Int32Array(1449);
function f29(a30) {
    const o31 = {
        "a": a30,
    };
    return o31;
}
const v32 = f29("setBigInt64");
const o33 = {
    "get": f29,
    "set": f29,
};
const v35 = new Proxy(v32, o33);
v35.a *= 898860.7774853848;
