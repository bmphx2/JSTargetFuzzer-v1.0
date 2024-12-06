const o6 = {
    valueOf() {
        try {
            super.toTimeString();
        } catch(e5) {
        }
        return 34846;
    },
};
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    try { a12(a12, 34846, 314200.058154366, o6, a13, this); } catch (e) {}
    a12.h = a12;
    this.h = a12;
    this.d = a13;
}
const v18 = new F10(-9007199254740990, 34846, F10, -2121636146, F10);
new F10(34846, -2121636146);
new F10(34846, -2121636146, v18);
try {
} finally {
    function f21() {
    }
}
