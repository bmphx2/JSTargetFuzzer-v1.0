function f0() {
}
function f1() {
    return f0;
}
const v3 = BigInt64Array.__proto__;
try { new v3(BigInt64Array, BigInt64Array, v3, BigInt64Array); } catch (e) {}
function f7(a8, a9, a10, a11) {
    const o14 = {
        set g(a13) {
        },
        ...a9,
    };
    return o14;
}
f7(2, f7());
const v19 = ["undefined",f0,f1];
[v19,"source","undefined",f0,v19];
[f0,f1,f1];
new Int16Array(9);
new Float32Array(0);
new Int8Array(6);
function F31() {
    if (!new.target) { throw 'must be called with new'; }
}
const v33 = new F31();
const v34 = [v33,F31];
const v35 = [v34,F31];
("1073741824").match(v35.copyWithin(v33, v34, v35));
