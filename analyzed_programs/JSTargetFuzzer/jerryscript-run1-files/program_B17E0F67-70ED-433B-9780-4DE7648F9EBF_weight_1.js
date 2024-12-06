function f0() {
    const o7 = {
        "a": 1.7976931348623157e+308,
        __proto__: -2,
        "b": 0.01851159062897978,
        get c() {
            return this;
        },
        [-2]: 1.7976931348623157e+308,
        get c() {
            this.__proto__ = this;
            return 0.01851159062897978 - this;
        },
        "g": -2,
        ...1.7976931348623157e+308,
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
f0();
f0 < v8;
new Date(f0);
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol();
}
const o24 = {
    get e() {
        function f21(a22, a23) {
            'use strict';
            a22.c = this;
            return a23;
        }
        return this;
    },
};
function f27() {
    return f0;
}
new BigInt64Array(702);
/(\xed\xb0\x80ia\D[^123]a{?)/gyism["compile"]();
function F38(a40, a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    a40.__proto__ = this;
}
new F38(3n, v9);
resourceName > resourceName;
