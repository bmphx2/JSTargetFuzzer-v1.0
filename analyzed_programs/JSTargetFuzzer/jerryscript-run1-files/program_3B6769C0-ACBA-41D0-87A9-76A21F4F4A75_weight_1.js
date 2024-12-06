const v2 = new Float64Array(0);
new Float32Array(14);
new BigUint64Array(5);
function f12() {
    const o18 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v16,v17] = v2.n();
            return this;
        },
    };
    return o18;
}
f12();
class C20 extends f12 {
    constructor(a22, a23, a24, a25) {
        super();
        const o26 = {
            "construct": f12,
        };
        new Proxy(this, o26);
    }
}
new C20();
Array()["fill"]();
