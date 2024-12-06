let v0 = 3790;
const v2 = new Int16Array(v0);
const v3 = async (a4, a5) => {
    a4.valueOf = a5;
    const v6 = await a5;
    function f7(a8, a9) {
        a9.valueOf = a5;
        return a5;
    }
    f7(Int16Array, Int16Array);
    return v6;
};
v0 <<= 127;
const v14 = [v3];
Reflect.apply(v2.some, v2, v14);
new Float32Array(127);
new Uint8Array(8);
const v24 = [NaN,-8.760656860722166,0.8897964854579219,0.007165234127322173,990704.3359931973];
const v25 = [-1.0,1.3124726019543162e+308,0.15143791387416972,5.0];
const v26 = [4.7702030977078,NaN,1000000000000.0,3.0,3.0,1.0];
const v29 = new Int32Array(2083);
new Uint8Array(255);
const v35 = new Int16Array(7);
function f36(a37, a38, a39) {
    const o46 = {
        "h": Int32Array,
        set e(a41) {
            e = a38;
            [a39,a38];
            [v29];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v35,
        "b": Uint8Array,
        "c": 255,
        ...a37,
        1053877365: a38,
    };
    function f47() {
        return o46;
    }
    delete v25[v35];
    a39 = Uint8Array;
    return o46;
}
const v49 = f36(2083, 255, 7);
const v50 = f36(v49, 7, 2083);
f36(f36, 255, 7);
let v52 = v26[6];
v52 = v24;
v49[-2] &= 2083;
v35[-1] -= 7;
let v56 = 10;
for (; v56--;) {
    v50.h;
    v50[Symbol.toPrimitive] = 7;
}
