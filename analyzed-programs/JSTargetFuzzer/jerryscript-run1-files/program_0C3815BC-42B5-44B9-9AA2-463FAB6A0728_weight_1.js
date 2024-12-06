function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740992;
    this.g = -9007199254740992;
    this.d = -9007199254740992;
}
new F0();
new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.g = F0;
}
new F9(-41573, -41573, 6);
new F9(6, 3, 3);
new F9(3, 6, -41573);
new F9(8);
const v22 = new Uint8ClampedArray(257);
const v25 = new Float64Array(145);
const v26 = [1073741823,45671,2,-1564349818,62319,-1584081008,9007199254740991];
function f27() {
    new F0();
    let v30 = 49211;
    v30--;
    Math.min(v25);
    Math.asinh(v25);
    return f27;
}
const v34 = v22.length;
const v36 = Symbol.iterator;
const o45 = {
    [v36]() {
        let v38 = 10;
        const o44 = {
            next() {
                v38--;
                const v42 = v38 == 0;
                const o43 = {
                    "done": v42,
                    "value": v38,
                };
                return o43;
            },
        };
        return o44;
    },
};
const v47 = [f27];
const v48 = v26.sort;
const v53 = Symbol.iterator;
const o62 = {
    [v53]() {
        let v55 = 10;
        const o61 = {
            next() {
                v55--;
                v55 == 0;
                const o60 = {
                    "done": v34,
                    "value": v55,
                };
                return o60;
            },
        };
        return o61;
    },
};
Reflect.apply(v48, v26, v47);
