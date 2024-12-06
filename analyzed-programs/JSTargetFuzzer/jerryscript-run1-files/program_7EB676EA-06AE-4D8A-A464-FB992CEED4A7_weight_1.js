function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 16;
    this.b = this;
    this.h = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = [v5,F0,v3];
const v8 = [false,v3];
const v9 = [v4];
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
    v4.a = v7;
    this.e = a14;
}
new F10(v3, v8, v4, v9);
Symbol.toPrimitive;
const v21 = new Uint32Array(858);
const v23 = new Uint16Array(v21, 858, 858);
const o28 = {
    m(a25, a26, a27) {
        return a25;
    },
};
for (const v29 in v21) {
    const v31 = [858];
    Reflect.defineProperty(o28.m, v23, v31);
}
const v34 = new F10(v4, v8, v7, v7);
const v35 = new F10(v5, v9, v5, v9);
class C36 {
    d = v3;
    o(a38, a39, a40, a41) {
        a41[268435440] = F10;
        return v35;
    }
    static get b() {
        const v46 = this[239];
        try { v46.n(v34, v46, F0); } catch (e) {}
        let v48 = 0;
        do {
            new Uint32Array(128);
            new BigInt64Array(64);
            new Float32Array(8);
            v48++;
        } while (v48 < 2)
        return v46;
    }
}
new C36();
new C36();
new C36();
for (let [i79, i80] = (() => {
        function f67(a68, a69, a70) {
            const o71 = {
            };
            return o71;
        }
        new Uint8Array();
        const o73 = {
        };
        f67(o73, f67, f67, [o73,o73]);
        const v77 = [-1000000.0];
        function f78() {
            return v77;
        }
        return [0, 10];
    })();
    i79 < i80;
    (() => {
        i79++;
        function f85(a86, a87, a88, a89) {
            return a87;
        }
    })()) {
}
function F92(a94) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol();
}
new F92(F92);
