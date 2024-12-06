const v1 = new Map();
function f2(a3) {
    const o15 = {
        "c": a3,
        __proto__: a3,
        164: a3,
        [Map](a5, a6) {
            function F7(a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = this;
            }
            const v12 = new F7(v1, this, this);
            const v13 = new F7(a5, v12, F7);
            new F7(v13, Map, v13);
            return a3;
        },
        ...v1,
    };
    return o15;
}
const v16 = f2(f2);
const v17 = f2(v16);
const v18 = delete v17[1];
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a22;
    this.c = a22;
    this.h = a22;
}
new F19(v18, v16);
new F19(v16, v18);
new F19(v17, v18);
f2(v16);
new Uint8ClampedArray(1024);
new Uint32Array(7);
new Float32Array(7);
[536870887];
const v37 = [1833425980,-107983266,268435439];
[-9007199254740990,-9007199254740992,-9007199254740992,15,1377701439,-29091,-9007199254740992,9007199254740991,-647328048];
v37.toString = f2;
f2(7);
function f40() {
    return f40;
}
class C42 extends f40 {
    static 4 = -36389;
}
new C42();
