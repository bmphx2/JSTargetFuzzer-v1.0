function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.d = -13;
}
const v3 = new F0();
new F0();
new F0();
const v7 = new ArrayBuffer();
new DataView(v7);
const o11 = {
    "a": F0,
};
for (let v12 = 0; v12 < 32; v12++) {
    v3["p" + v12] = v12;
}
ReferenceError();
new BigUint64Array(1000);
new Float64Array(2);
new Float32Array(16);
function f25() {
    -Infinity < -65537n;
    BigInt64Array.__proto__;
}
let v37 = BigInt64Array;
v37 <<= v37;
const v40 = ([6,6,6,6])[4];
new Uint8Array(0);
const v47 = new Uint8ClampedArray();
for (let v49 = 0; v49 < 32; v49++) {
    Symbol["p" + v49] = v49;
}
v47[Symbol.toStringTag];
const v55 = [-8,4294967295,148900462];
const t31 = [-5.0,-1.0,0.12962519354005442,-408.5946067459894,363680.54708949546,-508042.05649336474,-360915.6470760817];
t31.valueOf = -9007199254740991;
const v58 = [-0.0,0.8525056277605404,103901.37109916145,1000000000000.0,-7.193598702467914,2.3271884805657876,3.0];
v58.length ^= v40;
let [,...v59] = v58;
let v60 = RegExp.bind("2147483647", v55);
const v62 = new Int32Array(127);
v60 /= v62;
new WeakSet();
new BigInt64Array(2);
/d/i.exec("2147483647");
BigInt64Array == [4,7,4294967297,-1,1000];
([5]).reverse();
