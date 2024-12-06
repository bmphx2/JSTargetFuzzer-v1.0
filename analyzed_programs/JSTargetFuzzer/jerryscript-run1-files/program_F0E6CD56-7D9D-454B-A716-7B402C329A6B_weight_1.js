function f0() {
    const o11 = {
        "f": 0.0,
        valueOf(a5, a6) {
            let v7 = 0;
            while (v7 < 9) {
                v7[3] = 9007199254740990;
                v7++;
            }
            return this;
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
class C18 {
    constructor(a20, a21, a22, a23) {
        let v19 = this;
        ({"f":a22,...v19} = v13);
        new BigInt64Array(8);
        new Uint8Array(2013);
        new Uint8Array(9);
    }
}
new C18(v13, 5, 5, v14);
new C18(-4294967297, 5, -4294967297, C18);
new C18(5, 5, 5, v12);
function f39() {
    return f39;
}
class C40 extends f39 {
    constructor(a42, a43, a44, a45) {
        super();
        function F46(a48, a49, a50, a51) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = f0;
        }
        const v52 = new F46(3.0, this, a44, -4294967297);
        new F46(3.0, v52, a43, C40);
        new F46(a43, v12, F46, a43);
        ([12,128,4294967297,308548132,-4294967295]).copyWithin(21610, -549482487, a42);
    }
}
new C40();
