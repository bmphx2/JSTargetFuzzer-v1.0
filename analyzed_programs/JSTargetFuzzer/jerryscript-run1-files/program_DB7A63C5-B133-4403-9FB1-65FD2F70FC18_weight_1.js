function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740992;
    this.g = -9007199254740992;
    this.d = -9007199254740992;
}
new F0();
new F0();
new F0();
new Uint32Array(8);
const v14 = new Uint8ClampedArray(257);
new Float64Array(145);
const v18 = [1073741823,45671,2,-1564349818,62319,-1584081008,9007199254740991];
function f19() {
    return f19;
}
v14.length;
const v22 = Symbol.iterator;
const o31 = {
    [v22]() {
        let v24 = 10;
        const o30 = {
            next() {
                v24--;
                const v28 = v24 == 0;
                const o29 = {
                    "done": v28,
                    "value": v24,
                };
                return o29;
            },
        };
        return o30;
    },
};
const v33 = [f19];
Reflect.apply(v18.sort, v18, v33);
