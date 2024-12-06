new Uint8Array(3530);
new Uint16Array(10);
const v8 = new Uint8ClampedArray(10);
function f10() {
    return v8;
}
function f11() {
    return v8;
}
Uint8ClampedArray[3] = f11;
for (let i15 = 0, i16 = 10; i15 < i16; i15++, i16--) {
    function f24(a25, a26) {
        v8[i16] = a25?.[255];
    }
    new Promise(f24);
}
