const v3 = [-1.7976931348623157e+308,-Infinity];
const v4 = [-Infinity,-934894.6244532899,-0.881035097019403,-0.0,0.8280059310508026,-1000000000.0,0.06008135035594531,4.0,-1.7976931348623157e+308];
const v5 = [1000000000.0,-1.658524027900107,-1.461971001486856e+308,0.5403798532581641];
function f9(a10, a11, a12) {
    const o50 = {
        [v3](a14, a15, a16) {
            const o19 = {
                "maxByteLength": 14,
            };
            const v21 = new SharedArrayBuffer(12, o19);
            new Uint16Array(v21);
            return -1712385057;
        },
        valueOf(a25, a26, a27, a28) {
            for (let i31 = 0, i32 = 10; i31 < i32, a11; i31++, i32--) {
                i31 = a11;
                [,a10] = a12;
                1 & i32;
            }
            a11[this];
            let {"length":v42,...v43} = -1712385057;
            return a28;
        },
        set e(a45) {
            const v47 = Symbol.toPrimitive;
            const o49 = {
                [v47]() {
                    Object.defineProperty(this, "d", { writable: true, enumerable: true, get: Symbol, set: this });
                    return a10;
                },
            };
        },
    };
    return o50;
}
const v51 = f9(1, v5, -4294967295);
f9(10, v4, 1);
f9(-1712385057, v3, v51);
const o55 = {
};
const v58 = [10000];
Reflect.apply(("delete").repeat, o55, v58);
