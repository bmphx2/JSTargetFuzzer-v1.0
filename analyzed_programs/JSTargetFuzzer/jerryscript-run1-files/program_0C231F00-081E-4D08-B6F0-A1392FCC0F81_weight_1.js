const v4 = new Int32Array(1);
WeakSet < v4;
const v9 = new Date();
new BigInt64Array(228);
new BigInt64Array(168);
new Uint32Array(1248);
function F22(a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    let v27 = 0;
    if (a24) {
        const v28 = 168 ** 4096;
        v28 + v28;
    } else {
        const o39 = {
            "apply": Date,
            "call": Date,
            "construct": Date,
            "get": Date,
            __proto__: this,
            [a26]() {
                const o32 = {
                    next() {
                        return a24;
                    },
                };
            },
            "isExtensible": Date,
            [a26]() {
                let v34 = 10;
                const o38 = {
                    next() {
                        return this == v34--;
                    },
                };
            },
            "ownKeys": Date,
            "preventExtensions": Date,
        };
        new Proxy(v9, o39);
    }
    while ((() => {
            const v43 = v27 < 8;
            new Uint32Array(8, 8, a25);
            return v43;
        })()) {
        v27++;
    }
}
new F22();
