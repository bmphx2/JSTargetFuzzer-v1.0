function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2147483648;
    this.g = -2147483648;
    this.h = -2147483648;
}
new F0();
new F0();
new F0();
new Int32Array(87);
new Int8Array(257);
new Int32Array(14);
const v19 = new Date();
let v20 = [v19];
--v20;
