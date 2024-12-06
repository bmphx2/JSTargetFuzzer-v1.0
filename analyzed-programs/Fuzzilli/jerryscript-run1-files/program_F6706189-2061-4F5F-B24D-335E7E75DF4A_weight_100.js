function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.g = a5;
}
new F3(4294967295);
const v7 = new F3(6);
new F3(6);
new Int8Array(2);
const v17 = new Int8Array(1000);
new Float32Array(4);
new Uint16Array(2);
new Int32Array(1378);
const v29 = new Int8Array(256);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = Int8Array;
}
new F30(Int8Array, 4, 6, v17);
new F30(Int8Array, 1378, v7, v29);
new F30(Int8Array, -2147483649, 1378, v29);
