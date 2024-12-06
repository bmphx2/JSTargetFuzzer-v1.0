function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1;
    this.h = 1;
    this.b = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5 - v4;
try { v5.toString(); } catch (e) {}
new Array(16);
const v12 = [true,v5,F0,F0];
const v13 = [v3];
const v14 = [v12,v3];
function f15(a16, a17, a18) {
    const o28 = {
        "g": v4,
        get d() {
            try { v13.includes(v3, a16); } catch (e) {}
            const v24 = Math.trunc(0.0);
            const v25 = 8 / 8;
            Math.sinh(v25);
            v25 - 0.0;
            return v24;
        },
    };
    return o28;
}
const v29 = f15(true, v12, v12);
f15(v12, v13, v14);
f15(v29, v12, v12);
const v34 = new Date(undefined);
let v35 = [v34];
--v35;
