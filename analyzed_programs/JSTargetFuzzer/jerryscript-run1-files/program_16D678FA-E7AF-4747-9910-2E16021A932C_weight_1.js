const v1 = new WeakMap();
const v2 = [WeakMap];
const v3 = [WeakMap,v1];
const v4 = [v3,WeakMap,v1];
const v5 = [v3];
const v6 = [v1];
const v7 = [WeakMap];
function f8(a9, a10) {
    const o37 = {
        __proto__: v7,
        [v6](a12, a13) {
            const v14 = a9[a12];
            try { a9.every(v14, a10); } catch (e) {}
            try { WeakMap.flat(a9); } catch (e) {}
            for (let v17 = 0; v17 < 5; v17++) {
                "p" + v17;
            }
            Math.trunc(Number && 1000000000.0);
            Math.abs(Number);
            Number + Number;
        },
        ...v7,
        [v4]: v7,
        3344: v5,
        1: WeakMap,
        10000: a10,
        m(a28, a29) {
            new a10();
            Error(Error);
            const v33 = [];
            (0.7127021906311133 instanceof a9) != v33;
            Object.defineProperty(a9, "b", { writable: true, value: a10 });
            return v5;
        },
        3: v7,
        [a9]: v2,
    };
    return a10;
}
f8(v3, v5);
f8(v4, v4);
f8(v2, v4);
function f41() {
}
const v45 = [-1000000.0,f41,-807.6596022618603,-1000000.0];
const v46 = [v45,-1000000.0,0.014069366437978514,v45];
const v47 = [v46,f41,-807.6596022618603];
function* f51(a52, a53, a54, a55) {
    const v56 = new a53(a53, a53);
    const v58 = new Int8Array();
    const v61 = new Float64Array();
    function f62() {
        return v61;
    }
    function f63(a64, a65, a66) {
        const o74 = {
            get e() {
                function F68(a70, a71, a72) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                return F68(64, this, v56);
            },
            [f62]: v58,
        };
        return f51;
    }
    f63(64, v58, v56);
    f63();
    let v78 = -17003;
    const v79 = ++v78;
    v78--;
    !v79;
    try { a54.padStart(a52, "object"); } catch (e) {}
    const o83 = {
        "construct": f41,
        "ownKeys": f41,
        "preventExtensions": f41,
    };
    new Proxy(v47, o83);
    yield* "object";
    return a52;
}
f51(-807.6596022618603, "U7O", "U7O", v46);
