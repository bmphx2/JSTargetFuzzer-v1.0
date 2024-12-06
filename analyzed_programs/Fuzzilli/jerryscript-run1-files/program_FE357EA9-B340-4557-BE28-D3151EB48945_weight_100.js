const v1 = new WeakMap();
class C2 extends WeakMap {
    static [v1] = WeakMap;
    #f;
    0 = WeakMap;
    f;
    m(a4, a5) {
        let {"f":v6,"h":v7,} = a4;
        const v9 = new WeakSet();
        v9[v7] = v1;
        return a4;
    }
}
new C2();
new C2();
new C2();
new Int8Array(10);
new Uint8Array(3);
new Uint32Array(954);
for (let v25 = 0; v25 < 68; v25++) {
    const v27 = Symbol.toPrimitive;
    const o32 = {
        [v27]() {
            return v25;
        },
    };
}
