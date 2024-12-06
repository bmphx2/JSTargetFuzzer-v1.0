const v2 = new BigInt64Array(1024);
const v5 = new Int32Array(512);
const v8 = new BigUint64Array(1024);
function f9() {
    return v8;
}
const v10 = [v8,v2,512,Int32Array,BigInt64Array];
const v11 = [v10,512,BigUint64Array];
const v12 = [f9,v5,512,v11];
class C13 {
    static #p(a15, a16) {
        function f17(a18, a19, a20, a21) {
            function F22(a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a24;
            }
            new F22(a21, BigUint64Array);
            const v27 = new F22(a21, F22);
            const v28 = new F22(v11, v27);
            return v28;
        }
        f17(v12, 1024, 512, a16);
        return v2;
    }
    #c = f9;
}
new C13();
new C13();
const v32 = new C13();
v10[v11] /= 1024;
function f33() {
    return v32;
}
Math.tan(-8);
Math.log2(v32);
Math.ceil(v32);
v32 ^ (-8 & v32);
-8 & 11;
Math.sin(-8);
