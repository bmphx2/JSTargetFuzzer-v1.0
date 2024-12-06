function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
let v5 = 0;
while (v5 < 7) {
    Object.defineProperty(v3, v4, { enumerable: true, value: f0 });
    v5++;
}
const v12 = new F1();
const v13 = [-58134,-698263198];
[127];
const v15 = [-1417877985,58331,4,28173,-5299];
function f16(a17, a18) {
    const o28 = {
        ...v12,
        [f0]: f0,
        m(a20, a21, a22) {
            const v25 = a18 % f0;
            ++a18;
            Math.log(v25);
            return a20;
        },
        "a": f0,
        [v15]: v12,
        __proto__: a18,
    };
    return o28;
}
f16(v4, f16);
f16(f16, v15);
f16(v12, v13);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
}
