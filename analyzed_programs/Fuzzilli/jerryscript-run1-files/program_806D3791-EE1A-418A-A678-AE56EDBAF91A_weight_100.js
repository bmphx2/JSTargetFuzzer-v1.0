function f3() {
    return "c";
}
new Uint8Array(2096);
new BigInt64Array(257);
new Uint16Array(1);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -7;
    this.b = a16;
}
const v18 = new F14();
const v19 = new F14(v18, v18);
const o20 = {
};
const v22 = new Proxy(v18, o20);
const v23 = delete v19[v22];
const v25 = Symbol.iterator;
const o40 = {
    [v25]() {
        let v27 = 10;
        const o39 = {
            next() {
                v27--;
                v27 == 0;
                let {"a":v32,"f":v33,"length":v34,} = "c";
                o20[15];
                return v23;
            },
        };
    },
};
