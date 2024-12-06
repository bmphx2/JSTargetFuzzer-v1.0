new Uint8ClampedArray(1024);
const v5 = new Uint8ClampedArray(33);
const v8 = Symbol.toPrimitive;
const o11 = {
    [v8]() {
        function f10() {
            return v8;
        }
        return 33;
    },
};
new Int32Array(13);
const o18 = {
    m(a15, a16, a17) {
        return a15;
    },
};
const v19 = o18.m;
v19.apply(v19);
function f21() {
    return 33;
}
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = Uint8ClampedArray;
}
new F22(v5, 1024, 13, 1024);
new F22(Uint8ClampedArray, 1024, 1024, 33);
new F22(F22, 33, 33, 13, f21);
const v32 = new Date();
v32.setUTCMinutes();
