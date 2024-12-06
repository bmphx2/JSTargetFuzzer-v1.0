function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    v4.f = v5;
    this.g = 9223372036854775807;
}
const v15 = new F9(F0, v4, 9223372036854775807, v3);
new F9(v4, v4, -3, v15);
new F9(-3, v4, -3, v15);
function f18() {
}
async function f22(a23, a24, a25, a26) {
    return v5;
}
const o27 = {
};
new Proxy(f22, o27);
new Uint8Array(0);
let v40 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v42 = new Int32Array(127);
v40 /= v42;
new Int32Array();
new BigInt64Array(2);
function f52() {
    return 4.0;
}
class C53 {
    constructor(a55) {
        function f57() {
            let {...v59} = arguments;
            return C53;
        }
        f57(Map);
    }
}
([5]).reverse();
