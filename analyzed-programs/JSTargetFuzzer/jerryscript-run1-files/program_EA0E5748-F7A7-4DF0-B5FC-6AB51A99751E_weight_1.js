let v0 = 2098329924;
--v0;
try { (5)["m"](v0, v0, 5, "m"); } catch (e) {}
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
function f17(a18, a19) {
    const o29 = {
        4294967296: 5,
        get a() {
            Math.random();
            const v24 = a18--;
            Math.imul(a19, a18);
            a19 << -2147483647;
            Math.cos(v24);
            Math.ceil(a19);
            return v24;
        },
    };
    return o29;
}
const v30 = f17(v0, 5);
const v31 = f17(5, 5);
f17(f17, v0);
function F33(a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 5;
    this.c = a35;
}
const v37 = new F33(v30, v31);
const v38 = new F33(v31, v37);
new F33(v31, v38);
[-9007199254740991,1,-13];
[1,440347686];
[-7,6403,-12,753217908];
function f43() {
}
const v46 = new Int32Array(3713);
const v49 = new Uint16Array(1024);
const v52 = new Uint8ClampedArray(5);
const v53 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v55 = [9,-65535];
v46.g = Uint16Array;
function f56(a57, a58) {
    v55["keys"](...v53, a58, ...v52, 5, ..."keys");
}
const v62 = new Promise(f56);
let v64 = v62["catch"](f43);
v64 = v49;
