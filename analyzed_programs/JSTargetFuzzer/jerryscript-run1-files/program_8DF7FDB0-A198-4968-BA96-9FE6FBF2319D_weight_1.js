function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4294967296;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.e = a8;
}
const v9 = new F6(v3);
new F6(v9);
new F6(F0);
new Uint32Array(v9);
new Uint16Array(4096);
13 && 9223372036854775807;
const o26 = {
};
new Proxy(v4, o26);
-1679320101 === -1679320101;
new Uint8ClampedArray(13);
new Date([1073741823,-9007199254740992,64,-65535]);
