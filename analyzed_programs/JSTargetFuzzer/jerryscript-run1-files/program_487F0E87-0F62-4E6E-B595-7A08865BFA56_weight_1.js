function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
}
const v7 = new F3("undefined", "undefined");
const v8 = new F3("undefined", "o");
new F3("undefined", "eyKZ9");
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a15;
}
new F13("undefined", "o", v8, 1024);
const v20 = new F13("eyKZ9", F13, v7, F13);
new F13("eyKZ9", "o", "eyKZ9", v20);
const v24 = new Uint16Array(7);
const o25 = {
};
isFinite.apply(o25.m, v24);
