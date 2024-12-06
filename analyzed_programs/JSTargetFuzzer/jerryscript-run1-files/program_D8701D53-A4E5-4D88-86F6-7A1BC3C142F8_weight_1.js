function f3() {
    return -1497644227;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 6344;
    this.c = a6;
}
const v7 = new F4(F4);
const v8 = new F4(v7);
new F4(v8);
new Map();
function f18(a19, a20) {
    const o24 = {
        __proto__: a20,
        "d": a20,
        [a19]: f18,
        ...v8,
        [536870912]: a20,
        p(a22) {
            let v21 = this;
            ~(v21 = a19);
            return f18;
        },
    };
    return o24;
}
class C25 {
}
C25 **= C25;
