class C3 {
    #f;
    m(a5, a6) {
        try {
            const t4 = "string";
            t4.#f *= this;
        } catch(e7) {
        }
        try {
            a6.#f;
        } catch(e9) {
        }
        return this;
    }
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "number";
    this.f = v10;
    this.e = a16;
}
const v19 = new F13(v10, "string", "string", v10);
new F13(v19, "number", "string", v11);
new F13(v10, "number", "number", v10);
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a25;
    this.f = a24;
    this.c = a24;
}
new F22("number", "string");
new F22("number", "number");
let v28 = new F22("number", "number");
switch (F13) {
    default:
        v11[v12];
        break;
}
for (const v30 in v12) {
    let v33 = 13;
    --v33;
    const v35 = v10 & v28;
    let v36 = v28 ^ v28;
    ++v36;
    ++v28;
    v35 << v30;
}
