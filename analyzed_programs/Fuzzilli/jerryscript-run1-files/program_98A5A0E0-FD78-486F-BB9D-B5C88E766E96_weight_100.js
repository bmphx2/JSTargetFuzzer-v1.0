function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 13796;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
    this.c = a8;
}
const v9 = new F6(v3);
const v10 = new F6(v4);
const v11 = new F6(v3);
const v12 = [-575824091,-9007199254740991,-50041,45622,-4303];
const v13 = [-268435456,512,129,-2147483649];
const v14 = [10963,31312,4096,4294967295,4,-2,4,-1329139153,-64714,-4096];
Object.defineProperty(v10, v11, { writable: true, enumerable: true, value: v9 });
function f15(a16, a17, a18, a19) {
    const o20 = {
        "b": F0,
        "e": v4,
    };
    return o20;
}
f15(v5, v11, v14, v14);
f15(v4, v9, v12, v13);
f15(v4, v11, v13, v14);
