const v2 = new Int32Array(2511);
v2.byteOffset >>= 2511;
const v5 = v2 >= Int32Array;
const v6 = v5 ? v2 : Int32Array;
try { v6(39, v5, 2511, v6); } catch (e) {}
for (let v8 = 0; v8 < 32; v8++) {
    v6["p" + v8] = v8;
}
new Uint16Array(39);
new Uint32Array(1539);
new BigUint64Array(114);
new Int16Array(128);
new Uint8Array(257);
const v24 = [];
const v25 = [v24,v24];
const v26 = [v25,v25];
[v25,v26,v25,v26,v25];
function* f37(a38, a39) {
    function f40(a41, a42, a43, a44) {
        Object.defineProperty(v25, 1, { enumerable: true, value: a43 });
        a44[8] |= 4.0;
        return arguments;
    }
    f40();
    yield v25;
    return 39366;
}
f37(v26, 39366);
