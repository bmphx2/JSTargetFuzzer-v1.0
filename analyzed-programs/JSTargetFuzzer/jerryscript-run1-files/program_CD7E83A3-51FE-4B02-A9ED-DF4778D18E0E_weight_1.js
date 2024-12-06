new Uint32Array(6);
new Float64Array(1);
const v8 = new Uint8Array(6);
const v9 = typeof v8;
v9 === "object";
const v13 = RegExp("object");
const o17 = {
    valueOf() {
        this[4];
        return 1;
    },
};
RegExp.name;
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a24;
    this.b = v13;
    this.e = Uint8Array;
}
new F20(128, 1, v9);
new F20(1, 128, "object");
new F20(-1, 128, F20);
const t22 = eval(eval);
t22("__proto__");
