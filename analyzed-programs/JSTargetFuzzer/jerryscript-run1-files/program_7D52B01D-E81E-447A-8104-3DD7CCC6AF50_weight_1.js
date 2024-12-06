const v6 = [-12n,15n,0];
const v8 = [-12n,[0,9]];
function f9(a10, a11, a12) {
    const o36 = {
        set g(a14) {
            for (const v15 of a14) {
                const v17 = Symbol.iterator;
                const o26 = {
                    [v17]() {
                        let v19 = 10;
                        const o25 = {
                            next() {
                                v19--;
                                const v23 = v19 == 0;
                                const o24 = {
                                    "done": v23,
                                    "value": v19,
                                };
                                return o24;
                            },
                        };
                        return o25;
                    },
                };
            }
            super.b = a14;
            new Uint16Array(16);
            new Int32Array(7);
            new Uint16Array(3);
        },
    };
    return o36;
}
f9(v6, v8, v6);
f9(v6, v6, v6);
f9(v8, v8, v6);
function f40() {
}
new Uint8Array(0);
let v54 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v56 = new Int32Array(127);
v54 /= v56;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
