let v1 = 2.220446049250313e-16;
let v2 = "e";
class C3 {
    constructor(a5, a6) {
        v1 = a5;
        try { a5.getUint16(-9007199254740990, -9007199254740990, a6, v2); } catch (e) {}
        function f8() {
            return v2;
        }
    }
    static [v1] = -9007199254740990;
    set e(a10) {
        let v11;
        try { v11 = a10.setUint32(-9007199254740990, v2, this, this); } catch (e) {}
        super.e = v11;
        ({"a":v2,"h":v11,...a10} = v1);
        const o17 = {
            "maxByteLength": -16,
        };
        const v19 = new ArrayBuffer(3687, o17);
        new Int16Array(v19);
    }
}
const v22 = new C3(v2, v2);
const v23 = new C3(v2, v1);
const v24 = new C3(C3, v2, v23);
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v24;
    this.constructor = a33;
}
const v37 = new F31(v23, 9058n, "-1", C3);
new F31(v1, 9058n, v37, "-1");
new F31(v23, 3n, v22, 3n);
/a(?!bbb|bb)c[^123]S*/giu.exec();
