function f0() {
    let v1 = 9007199254740992;
    const o24 = {
        get h() {
            v1 = -6;
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = d;
                this.c = d;
                this.d = -6;
            }
            new F6(d);
            new F6(d);
            const v11 = new F6(v1);
            const v14 = new Uint8Array(1705);
            const o20 = {
                m(a16, a17, a18) {
                    v14.fill();
                    return 1705;
                },
            };
            Reflect.apply(o20.m);
            return v11;
        },
        250: v1,
    };
    return o24;
}
const v25 = f0();
f0();
f0();
new Set();
new Uint8ClampedArray(2);
new Int16Array(932);
new Int16Array(1);
new BigUint64Array(Array);
const v44 = new BigInt64Array(702);
2 instanceof Array;
try { v25.set(v44); } catch (e) {}
