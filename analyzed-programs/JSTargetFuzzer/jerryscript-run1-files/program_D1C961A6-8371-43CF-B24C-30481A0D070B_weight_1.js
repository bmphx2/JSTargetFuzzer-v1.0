function f0() {
}
function f1() {
    return f0;
}
[-65536];
[10000,-9007199254740990,-1,-65537,1714910592,-2123117313,2];
const v7 = [-8,4294967295,-13,-5];
class C8 {
    static valueOf(a10, a11, a12, a13) {
        let v14;
        try { v14 = v7.lastIndexOf(a10, 4); } catch (e) {}
        try { new a13(v14); } catch (e) {}
        return this;
    }
    constructor(a17, a18) {
        const v19 = a18 >> a18;
        try { v7.p(v19, -17180); } catch (e) {}
        this.__proto__ = v7;
    }
}
new C8(4, 4);
new C8(-17180, -65536);
new C8(-65536, -17180);
const v29 = new Int8Array(231);
for (let v30 = 0; v30 < 5; v30++) {
    v29["subarray"](v30, v30);
}
