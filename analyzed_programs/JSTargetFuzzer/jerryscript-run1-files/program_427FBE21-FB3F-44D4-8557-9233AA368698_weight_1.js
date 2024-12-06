function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 536870887;
    this.c = 536870887;
    this.g = 536870887;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o17 = {
        [a7](a9, a10) {
            v4[a7] /= v3;
            const v11 = ~v5;
            v4.__proto__ = this;
            try { a9.getMonth(a7, v11, a7, a10, f6); } catch (e) {}
            try {
                super.getUTCMonth();
            } catch(e14) {
            }
            const v15 = v11;
            a7 == a7;
            v4[2100] /= v15;
            return a9;
        },
        [a7]: a7,
        ...a7,
    };
    return o17;
}
const v18 = f6(v5);
v18.c;
v3.e = v18;
v4.c = v3;
for (let v20 = 0; v20 < 32; v20++) {
    v4["p" + v20] = v20;
}
f6(v5);
[v5,v3,[[,f6(v4)]],F0,f6];
Uint8Array & (11 <= 3296 ? 11 : 3296);
