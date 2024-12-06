const v2 = new Uint32Array(69);
const v5 = new Int32Array(129);
new Int16Array(5);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.g = 69;
    this.a = v5;
}
new F9(129, 69, 129, 129);
const v16 = new F9(129, 5, 129, 129);
const v17 = new F9(5, 129, 69, 69);
const o43 = {
    m(a19, a20, a21) {
        try {
        } finally {
            function F25(a27, a28, a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                function F31(a33, a34, a35, a36) {
                    if (!new.target) { throw 'must be called with new'; }
                    a33 & this;
                    let [v38,v39] = v2;
                    a29[5] >>= 9223372036854775807;
                    this[a33];
                    a29.__proto__;
                }
                F31(9223372036854775807, -19870386, -65537n, F25);
            }
        }
        return a20;
    },
};
const v44 = o43.m;
const o45 = {
    ...v2,
    ...v16,
    "b": v17,
    1073741825: 5,
    [F9]: Int32Array,
    ...v44,
};
