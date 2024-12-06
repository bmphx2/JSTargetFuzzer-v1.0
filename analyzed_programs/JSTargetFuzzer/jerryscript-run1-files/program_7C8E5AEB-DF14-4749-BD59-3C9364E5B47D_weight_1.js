const v1 = new WeakSet();
const v6 = new WeakSet();
function f7(a8, a9, a10, a11) {
    const o19 = {
        __proto__: a10,
        [a9]: WeakSet,
        ...v1,
        "h": WeakSet,
        "e": f7,
        /*
        __proto__: v1,
        */
        ...v1,
        "g": v1,
        set a(a13) {
            Object.defineProperty(v1, "e", { writable: true, enumerable: true, value: a13 });
            try {
                super.getBigInt64(this, 9007199254740992);
            } catch(e18) {
            }
        },
    };
    return o19;
}
const v20 = f7(-6425, WeakSet, -6425, 4);
const v21 = f7(4, 268435439, 268435439, -6425);
const v22 = f7(268435439, WeakSet, 4, 4);
[268435439,f7,4];
[v1,v1,[4,v6,v22,f7,WeakSet,v22],v20,v21];
const v26 = [2147483647,-1,1000,-16,268435456,52211,-1932662248,268435441];
for (let v27 = 0; v27 < 5; v27++) {
    Object.defineProperty(v26, "length", { value: v27 });
}
