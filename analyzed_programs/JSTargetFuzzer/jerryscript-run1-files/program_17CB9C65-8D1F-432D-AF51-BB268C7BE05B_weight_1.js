function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65536;
}
new F0();
const v4 = new F0();
new F0(v4, v4);
new Uint8ClampedArray(492);
Number["isSafeInteger"](([922012284,1073741825,-4294967297,2,536870887,9007199254740990,1068705776,-328380159]).length);
new Int16Array(2);
const v23 = [Int16Array];
Reflect.apply(("unicode").indexOf, "unicode", v23);
5 - 4294967297;
const o30 = {
};
new Int8Array(129);
typeof -268435456n;
