class C1 {
    10 = null;
    n() {
        delete this[9];
        const v4 = this.__proto__;
        for (let v5 = 0; v5 < 32; v5++) {
            v4["p" + v5] = v5;
        }
        return null;
    }
    f;
    1;
    [null];
}
new C1();
const v9 = new C1();
const v10 = new C1();
try { C1["p"]("p", v10, C1, "p", v9); } catch (e) {}
delete v9[80];
[null,v9];
new BigUint64Array(255);
new Int8Array(255);
new BigInt64Array(239);
new Promise(Promise);
function f35() {
    3.901321527399057 & Int8Array;
    try { f35(); } catch (e) {}
    return Int8Array;
}
f35();
ReferenceError.apply();
