function f0() {
    let v2 = 1073741824;
    const o7 = {
        get g() {
            const t4 = "toString";
            t4.__proto__ = "toString";
            v2 += 127;
            "toString" >> this;
            return this;
        },
        __proto__: "toString",
        [127]: "toString",
        ["toString"]: f0,
        "e": f0,
        [-2]: v2,
        "d": "toString",
    };
    return o7;
}
let v8 = f0();
f0();
const v10 = f0();
[-2147483647,4,5,8,-1959,1702975842];
[268435439,7,-287467517,4294967295];
[2126540307,64,268435441,-9007199254740991,-18857,536870912,8];
const v23 = [65535n,0n,964329252n];
let v24 = [964329252n,964329252n,v23,v23];
[v24,v24,v23,964329252n,0n];
const v26 = [65535n,v10];
["U",0n];
const v28 = [v24];
const t31 = "fdNr";
t31[0] = 65535n;
let v35;
try {
const t0 = "localeCompare";
v35 = new t0(v23, v28, v28, 58270);
} catch (e) {}
async function* f36(a37, a38, a39) {
    ({"length":v8,...v24} = a38);
    yield v23;
    await a37;
    yield "fdNr";
    return a37;
}
f36(58270, v26, v35);
