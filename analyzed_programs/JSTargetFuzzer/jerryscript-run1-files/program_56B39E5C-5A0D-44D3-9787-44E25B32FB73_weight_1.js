new Set();
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F12();
with (v17) {
    let v18 = 536870887 in v17;
    v18 >>>= v18;
}
const v23 = Date();
const v24 = new Date();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
}
new F25(11, 2, -3, v23);
new F25(2, 2, 2, v24);
const v33 = [4294967297,-4294967295,65535,9,127,1327271026,0,257,2051462270];
class C34 {
    static 8 = 2;
    static h = v33;
}
let v35 = Date(-3);
const v38 = v35--;
const v39 = !1;
v38 * v33;
-5.0 >> v39;
