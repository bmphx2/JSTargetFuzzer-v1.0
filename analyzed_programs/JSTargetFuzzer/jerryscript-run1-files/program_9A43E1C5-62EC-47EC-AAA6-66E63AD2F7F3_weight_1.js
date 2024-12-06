function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65537;
}
const v3 = new F0();
new F0();
new F0();
const o11 = {
};
const v13 = new Proxy(v3, o11);
let v15;
try { v15 = o11["UTC"]("UTC", v13, -14); } catch (e) {}
-Infinity;
function f20() {
    for (let i22 = 13;
        (() => {
            const o23 = {
            };
            ([-2.0,8.942667862857025,5.0])["fill"](..."fill");
            i22 < 7;
            return v15;
        })();
        i22++) {
    }
    return f20;
}
class C32 extends f20 {
}
const v33 = new C32();
new C32(v33);
new C32();
