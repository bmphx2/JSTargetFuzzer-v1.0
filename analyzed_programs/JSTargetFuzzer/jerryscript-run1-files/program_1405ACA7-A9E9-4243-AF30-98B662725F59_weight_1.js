function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -1089214549;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
const v7 = [F0,v4];
[v5,[v7],v7];
function f10() {
    return f10;
}
new BigInt64Array(0);
new BigUint64Array(127);
new Uint8Array(14);
new Int16Array(19);
const v28 = new Uint32Array(64);
new Int8Array(1700);
const o32 = {
};
const v34 = new Proxy(v28, o32);
const v36 = new BigInt64Array();
const o37 = {
    ...v36,
};
new Int8Array();
let v41 = 0;
while (v41 < 8) {
    v41++;
}
let v45;
try { v45 = v34["valueOf"](Uint32Array, Uint32Array, v34, v28); } catch (e) {}
const v46 = [64,-36134n,v45,Uint32Array];
const v48 = [[v34,1700,v46,Proxy,v46]];
try { v45(v48); } catch (e) {}
