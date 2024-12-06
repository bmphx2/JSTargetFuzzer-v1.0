new Uint8ClampedArray(128);
new Int8Array(890);
const v8 = new Uint8ClampedArray(1);
function f9() {
    const v10 = 1 < v8;
    if (v10) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = v10;
            this.b = v10;
        }
        new F11(1, 1, 128, 890);
        new F11(890, 1, 128, 128);
        new F11(1, 890, 890, 1);
    } else {
        try { new f9(v10, 128, 1, ...Int8Array, Uint8ClampedArray); } catch (e) {}
    }
    return Int8Array;
}
const t19 = [808556844,2147483648,536870888,4294967297,2020106338,257,-65050,4707,8,4];
t19.length = 2;
