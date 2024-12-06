function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9;
    this.a = "y";
}
const v12 = new F6(F6, -11, 268435439, "hasInstance");
const v13 = new F6("hasInstance", 9, 268435439, v12);
new F6("y", 268435439, -11, v13);
function f19(a20, a21) {
    const o23 = {
        get b() {
            return a20;
        },
    };
    return o23;
}
const v24 = f19();
const v25 = f19(-42330n, v24);
class C26 extends f19 {
    constructor(a28, a29) {
        super();
        const v30 = `
        `;
        eval(v30);
    }
}
new C26(v25, 5);
for (const v34 in v24) {
}
