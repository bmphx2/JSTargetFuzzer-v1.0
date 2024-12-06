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
    const o14 = {
        [a7](a9, a10) {
            v4[a7] /= v3;
            const v12 = ~v5;
            a7 == a7;
            v4[2100] /= v12;
            return a9;
        },
        [a7]: v3,
        ...a7,
    };
    return o14;
}
f6(v4);
f6(v5);
[v5,v3,[[,f6(v4)]],F0,f6];
Uint8Array & (11 <= 3296 ? 11 : 3296);
