const v5 = Symbol.iterator;
const o12 = {
    [v5]() {
        let v7 = 10;
        const o11 = {
            next() {
                return this == v7--;
            },
        };
    },
};
const v16 = [-3.0,Infinity,[Infinity,Infinity,Infinity,-3.0],4.0];
const v17 = [-3002n,Infinity];
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v17;
    this.g = a20;
}
const v22 = new F18(Infinity, v17);
new F18(4.0, -3002n);
const v24 = [8];
const v25 = (a26, a27) => {
    function f28(a29, a30) {
        const o31 = {
            ...a26,
        };
        return f28;
    }
    return v24;
};
const v32 = new F18(Infinity, v16);
new ReferenceError(v32);
let v37 = [985.643444469825,262233.2912316574,0.5274149692767784];
for (let v38 = 0; v38 < 5; v38++) {
    -1406008077 || v38;
    v37--;
}
[null];
("9").replace(-3.0);
new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const v49 = ("SevCf").trimStart;
const v50 = Reflect.apply(v49, 5);
v50[v5] = v32;
v22.f -= -3.0;
const v51 = [v49,null,o12,v50,Infinity];
[v51,null,"SevCf",F18];
["SevCf",o12,"SevCf",v51,v16];
