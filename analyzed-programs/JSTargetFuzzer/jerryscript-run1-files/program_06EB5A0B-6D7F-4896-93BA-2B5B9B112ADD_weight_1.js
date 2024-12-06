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
    const o20 = {
        [a7](a9, a10) {
            try {
            } catch(e12) {
                this[e12];
            } finally {
                a9 = f6;
            }
            v4[a7] /= v3;
            const v14 = ~v5;
            v4.__proto__ = this;
            try { a9.getMonth(a7, v14, a7, a10, f6); } catch (e) {}
            try {
                super.getUTCMonth();
            } catch(e17) {
            }
            const v18 = v14;
            a7 == a7;
            v4[2100] /= v18;
            return a9;
        },
        [a7]: a7,
        ...a7,
    };
    return o20;
}
const v21 = f6(v5);
v21.c;
v3.e = v21;
v4.c = v3;
for (let v23 = 0; v23 < 32; v23++) {
    v4["p" + v23] = v23;
}
f6(v5);
[v5,v3,[[,f6(v4)]],F0,f6];
Uint8Array & (11 <= 3296 ? 11 : 3296);
