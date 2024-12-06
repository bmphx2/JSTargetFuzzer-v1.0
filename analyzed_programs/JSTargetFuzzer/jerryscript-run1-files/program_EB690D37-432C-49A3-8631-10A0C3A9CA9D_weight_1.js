function f0() {
}
const v5 = new BigInt64Array(16);
v5[0] = 14 !== v5;
v5 << v5;
new Float64Array(7);
const v12 = new BigInt64Array(1024);
const v15 = new BigUint64Array(803);
function f16() {
    return 803;
}
class C17 extends Float64Array {
    [7] = 1024;
    d = v15;
    constructor(a19, a20, a21) {
        super(1024, a20);
        for (const v22 in this) {
            continue;
        }
    }
    [f0];
}
new C17(1024, 7, v15);
new C17(803, 7, v12);
new C17(1024, 1024, BigInt64Array);
function F29() {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = new F29();
const v32 = [v31,F29];
const v33 = [v32,F29];
try {
} finally {
    function F34(a36, a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
    }
}
("1073741824").match(v33.copyWithin(v31, v32, v33));
