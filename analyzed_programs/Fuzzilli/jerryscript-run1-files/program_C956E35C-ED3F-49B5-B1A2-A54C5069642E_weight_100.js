function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -7;
    this.h = -7;
    this.a = -7;
}
new F0();
new F0();
new F0();
new BigInt64Array(256);
new Int8Array(91);
new Int32Array(10);
new Uint16Array(0);
new Int16Array(2);
const v23 = new Uint8ClampedArray(3391);
("valueOf")[v23].__proto__;
for (let i31 = 0, i32 = 10; i31 < i32; i31++, i32--) {
    function f40() {
        return i32;
    }
    v23.__proto__;
}
