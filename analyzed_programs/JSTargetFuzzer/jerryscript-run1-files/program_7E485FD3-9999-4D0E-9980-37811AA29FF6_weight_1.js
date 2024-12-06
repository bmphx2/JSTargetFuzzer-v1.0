const v2 = new Int16Array(1);
class C4 {
    static [v2] = 512;
    c;
}
new C4();
const v6 = new C4();
new C4();
new Uint32Array(512);
const v12 = new Int32Array(11);
function f13(a14, a15, a16, a17) {
    const o30 = {
        "name": v12,
        "d": a15,
        4: Int16Array,
        [11](a19, a20) {
            const v22 = [];
            Reflect.apply(v2.reverse, this, v22);
            return a16;
        },
        __proto__: v12,
        "g": 1,
        get c() {
            a16 = arguments;
            this.arguments = arguments;
            try { C4.p(); } catch (e) {}
            a16.__proto__ = v6;
            delete v2[2277807564];
            return this;
        },
        "f": 1,
        "h": a15,
        "c": Int16Array,
    };
    return o30;
}
f13(11, 1, 11, 512);
f13(11, 11, Uint32Array, 512);
f13(512, 512, f13, 512);
new Float32Array(132);
new Uint8ClampedArray(2523);
new Uint32Array(4);
("function").match("function") < "function";
