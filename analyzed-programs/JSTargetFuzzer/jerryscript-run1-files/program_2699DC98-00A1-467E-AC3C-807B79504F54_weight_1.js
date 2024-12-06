function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 13n;
}
const v6 = new F3(2147483648n);
const v7 = new F3(13n);
const v8 = new F3(2147483648n);
function f12(a13, a14, a15, a16) {
    const o27 = {
        [4n](a18, a19) {
            const v20 = new F3(a13);
            const v21 = v20 - v8;
            const o26 = {
                valueOf() {
                    let v23;
                    try { v23 = a16(F3, this, v7, this); } catch (e) {}
                    const v24 = v23 && a19;
                    try { a15.toString(this, this, v23, a15, v24); } catch (e) {}
                    return v21;
                },
            };
            return a19;
        },
        ...v7,
    };
    return o27;
}
~-37993n;
f12(4n, 4n, v7, 13687n);
f12(4n, 13n, v6, -14n);
f12(13n, -15n, v7, -14n);
const v35 = Symbol();
class C37 extends Array {
    static [v35] = 64769;
}
