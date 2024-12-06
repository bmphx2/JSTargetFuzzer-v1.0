function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483648;
    this.d = -2147483648;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const v6 = typeof v3;
v6 === "bigint";
v6 !== (F0 instanceof F0);
new Uint32Array(127);
new Int8Array(165);
new BigInt64Array(8);
class C20 {
    valueOf(a22, a23, a24) {
        function F25(a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a27;
        }
        new F25(8, a24);
        new F25(a23, v4);
        const v31 = new F25(a22, a22);
        return v31;
    }
    get f() {
        this.valueOf = Int8Array;
        this.valueOf = F0;
        return F0;
    }
    [Int8Array] = 165;
}
const v33 = new C20();
const v34 = new C20();
const v35 = new C20();
new Float32Array(3701);
const v41 = new Int32Array();
const v42 = new Int32Array();
function F43(a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.toString = a45;
    C20[Float32Array];
    this[Symbol.iterator] = C20;
    function f49(a50, a51) {
        new BigUint64Array(a51());
        return f49;
    }
    this.f = v42;
    a45 > Uint32Array;
    h = this;
    function F56(a58, a59, a60) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a59;
        this.c = v4;
        this.d = v6;
    }
    new F56(v34, v35, a45);
    new F56(v35, a45, 127);
    new F56(v33, v34, 165);
    this.e = v41;
}
new Int32Array(6);
new Float32Array(0);
const v69 = new Map();
new BigUint64Array(3472);
const v75 = new Uint32Array(168);
v75[3] = v69;
[-Infinity];
const o79 = {
    set a(a78) {
    },
};
for (let v80 = 0; v80 < 5; v80++) {
    o79.a;
}
let v82 = [-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v84 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v84);
let v88 = -41990;
const v89 = v82++;
let v90 = --v88;
function f91() {
    return f91;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v90 * (v89 << v88);
