function f0() {
}
new Float64Array(7);
const v6 = new BigInt64Array(1024);
const v9 = new BigUint64Array(803);
function f10() {
    return 803;
}
class C11 extends Float64Array {
    [7] = 1024;
    d = v9;
    constructor(a13, a14, a15) {
        super(1024, a14);
        for (const v16 in this) {
            continue;
        }
    }
    [f0];
}
new C11(1024, 7, v9);
new C11(803, 7, v6);
new C11(1024, 1024, BigInt64Array);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F23();
const v26 = [v25,F23];
const v27 = [v26,F23];
("1073741824").match(v27.copyWithin(v25, v26, v27));
