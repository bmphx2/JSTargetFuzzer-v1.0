function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9007199254740991;
    this.h = 9007199254740991;
    this.g = 9007199254740991;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return v3;
}
function f13() {
    return -232916055;
}
try {
    for (const v15 of "preventExtensions") {
        break;
    }
} finally {
}
