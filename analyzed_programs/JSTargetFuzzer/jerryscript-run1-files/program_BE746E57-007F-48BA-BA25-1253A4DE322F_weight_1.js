function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
    a5.d = -4294967297n;
}
const v7 = new F3(2147483647n, -4294967297n);
new F3(2147483647n, -536870912n);
new F3(-536870912n, F3);
function f13(a14, a15) {
    const o33 = {
        n(a17, a18) {
            const o21 = {
                "maxByteLength": a14,
            };
            const v23 = new SharedArrayBuffer(a15, o21);
            const v25 = new a18(v23);
            new a15(10);
            const v29 = async (a30, a31, a32) => {
                return v29;
            };
            return v25;
        },
        ...v7,
    };
    return o33;
}
f13(15, 15);
f13(2147483648, 2147483648);
f13(-536870912, 2147483648);
("boolean").charCodeAt(255);
