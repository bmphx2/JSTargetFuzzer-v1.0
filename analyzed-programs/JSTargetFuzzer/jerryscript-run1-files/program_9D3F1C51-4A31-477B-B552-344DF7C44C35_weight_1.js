function f3(a4, a5) {
    const o12 = {
        toString(a7) {
            this[5] = a4;
            (a7 *= -161990843) >>> this;
            for (let v9 = 0; v9 < 32; v9++) {
                this["p" + v9] = v9;
            }
            return a7;
        },
    };
    return o12;
}
const v13 = f3(-161990843, 8);
f3(-161990843, -161990843);
const v15 = f3(8, 8);
class C19 extends f3 {
    [8] = -161990843;
    constructor(a21, a22, a23) {
        super(a21, a22);
        [a21] = "asyncIterator";
        try { a21(-161990843, a22, a23, a23); } catch (e) {}
    }
    get d() {
        const v26 = this.__proto__;
        const v27 = "asyncIterator" + v13;
        let v28;
        try { v28 = v26(v27, v27, v27, v27, this); } catch (e) {}
        return v28;
    }
}
const v29 = new C19(8, "a", v13);
new C19(8, f3, v15);
new C19(-9, v15, v29);
const v32 = [];
const v33 = [v32,v32];
const v34 = [v33,v33];
[v33,v34,v33,v34,v33];
function* f45(a46, a47) {
    function f48(a49, a50, a51, a52) {
        Object.defineProperty(v33, 1, { enumerable: true, value: a46 });
        a52[8] |= 4.0;
        function f54() {
        }
        const v56 = [-2.220446049250313e-16,-1000.0,340.17202629670487,-0.8622272042918695,-1000.0];
        const v57 = [1000000.0];
        [2.0];
        new Float32Array();
        const v63 = new Uint32Array(1762);
        10 >>> v56;
        for (let v65 = 0; v65 < 32; v65++) {
            v57["p" + v65] = v65;
        }
        v57.__proto__ = v63;
        return arguments;
    }
    f48();
    yield 45279;
    return 39366;
}
f45(v34, 39366);
