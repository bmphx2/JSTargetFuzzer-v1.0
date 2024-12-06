let v1 = 9223372036854775807;
function f3(a4, a5) {
    const o19 = {
        "b": a5,
        toString(a7, a8) {
            const v9 = a7 | this;
            ({"a":v1,"d":a5,"f":v1,} = a4);
            const v10 = this[65536];
            try { v10(a5, v9, 65536, -52326); } catch (e) {}
            return v1;
        },
        set f(a13) {
            let v14;
            try { v14 = new a13(65536, -52326, a5, a4); } catch (e) {}
            const v15 = v14 === a13;
            a4.e += a13;
            a13.asyncIterator ^= v14;
            const v16 = [v1,a4,this,v15,65536];
            [-52326,v16,v16];
            [v16,a5];
        },
    };
    return o19;
}
const v20 = f3(65536, -52326);
const v21 = f3(f3, 65536);
const v22 = f3(v20, f3, v21, -52326);
function f23(a24, a25, a26) {
    const o31 = {
        "b": v22,
        [v1]: a25,
        "h": -52326,
        3: -52326,
        "a": v21,
        __proto__: a26,
        m(a28, a29) {
            try { v22.toString(v1, a24, a24, -52326, a26); } catch (e) {}
            Object.defineProperty(a28, 3153378977, { enumerable: true, get: f3 });
            a29.__proto__ = a25;
            return a28;
        },
        ...a25,
    };
    return o31;
}
f23(f23(f23(65536, v20, v20), v22, v1), v20, v20);
("-19775")["padEnd"](129, -52326);
