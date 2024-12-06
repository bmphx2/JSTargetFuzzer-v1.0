const v0 = [];
const v1 = [v0,v0,v0,v0];
const v2 = [v1,v1,v1,v0,v1];
const v3 = [v2,v2];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.a = a6;
}
const v8 = new F4(v0, v2);
const v9 = new F4(v3, v0);
const v10 = new F4(v3, v2);
function f11(a12, a13) {
    const o20 = {
        get b() {
            const v15 = `
                a12[a12];
            `;
            eval(v15);
            return v1;
        },
        "b": v9,
        ...v3,
    };
    return o20;
}
const v21 = f11(v3, v3);
const v22 = f11(v3, v0);
const v23 = f11(v1, v2);
v1.filter(v8, v9, v9, v23);
function f25(a26, a27, a28, a29) {
    const v30 = a29.constructor;
    class C31 extends v30 {
        [v30];
    }
    new C31();
    return v23;
}
f25(v10, v21, v9, v22);
