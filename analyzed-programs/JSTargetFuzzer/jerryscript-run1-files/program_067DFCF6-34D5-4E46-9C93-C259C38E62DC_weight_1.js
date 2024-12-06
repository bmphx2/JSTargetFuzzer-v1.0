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
    new f0();
    v3[4];
    Object.defineProperty(v3, v4, { enumerable: true, value: f0 });
    v5++;
}
const v17 = new F1();
const v18 = [-58134,-698263198];
[127];
const v20 = [-1417877985,58331,4,28173,-5299];
function f21(a22, a23) {
    const o33 = {
        ...v17,
        [f0]: f0,
        m(a25, a26, a27) {
            const v30 = a23 % f0;
            ++a23;
            Math.log(v30);
            return a25;
        },
        "a": f0,
        [v20]: v17,
        __proto__: a23,
    };
    return o33;
}
f21(v4, f21);
f21(f21, v20);
f21(v17, v18);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
}
