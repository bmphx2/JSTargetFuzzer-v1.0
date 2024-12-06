function F0() {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
        constructor(a5, a6, a7, a8) {
            const v12 = [a5,"6"];
            Reflect.apply(("g").padEnd, "g", v12);
        }
    }
    const v15 = new C3(7, 7, C3, C3);
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        new a19(7);
    }
    new F16(v15, C3);
    this.d = 0;
    this.g = 0;
}
new F0();
new F0();
new F0();
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
}
const v39 = new F34();
with (v39) {
    let v40 = 536870887 in v39;
    v40 >>>= v40;
}
