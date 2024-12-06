function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v4,v4];
const v8 = [v4,F0,[v6,v3,v3,F0,v5]];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
}
new F9(v8, v3, v6);
new F9(v8, v5, v4);
new F9(v8, v3, v8);
class C17 extends F9 {
    n(a19, a20, a21, a22) {
        for (let [v23,v24,v25,...v26] of v8) {
            Math.imul(1073741824, v26);
            Math.hypot(1073741824);
            let v32 = v26 | v26;
            const v33 = 15 << 1073741824;
            async function* f34(a35, a36, a37) {
                const v38 = a36 !== a19;
                await (v38 | v38);
                yield a19;
                return v4;
            }
            f34(Math, v25, v3);
            !v33;
            v32++;
        }
        return a22;
    }
}
new C17();
new C17();
new C17();
("valueOf").split("trimLeft");
