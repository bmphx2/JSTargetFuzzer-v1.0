function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870889;
    this.e = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = -Infinity;
function f12() {
    return v8;
}
function f13(a14, a15, a16) {
    const o28 = {
        get b() {
            this.b = this;
            return 536870887;
        },
        [-641358476](a22, a23, a24, a25) {
            const o26 = {
                __proto__: this,
                ...v5,
                ...a25,
                "g": a24,
            };
            new f12();
            return -641358476;
        },
        ...v3,
        __proto__: a14,
        ...v5,
        4: 1.6031658194123318e+308,
        629583608: v5,
    };
    return o28;
}
f13(33366, v8, v5);
f13(33366, v8, v4);
f13(33366, -200.92586325238778, v3);
let v32 = -2147483648n;
1024n ** (v32 &= 1546754096n);
