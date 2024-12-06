function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.c = -10;
}
new F9(5.0, -2147483647, "object");
new F9(5.0, -536870912, "object");
new F9(993.1264973385319, -10, "valueOf");
new Uint8Array(10);
new BigInt64Array(14);
new Uint16Array(255);
const v27 = [4,4,4,4,5.0];
const v29 = 4 / 0;
v29 < v27[903];
const v32 = [0.3963332363617482];
function f33() {
    return 255;
}
Object.defineProperty(v32, "h", { enumerable: true, get: f33 });
v32.lastIndexOf();
