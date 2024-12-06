function f0() {
}
function f1() {
    const o6 = {
        "c": f0,
        "b": f0,
        "d": f0,
        2606: f0,
        [f0]() {
            return this;
        },
        __proto__: f0,
    };
    return o6;
}
let v7 = f1();
f1();
f1();
const v14 = new WeakMap();
new WeakMap();
let v18 = Uint32Array;
const v19 = new v18(181);
let v20 = 1;
let v21 = BigUint64Array;
let v22 = new v21(v20);
({"b":v7,"c":v18,...v20} = v7);
v14[9];
new Uint8Array(128);
const v29 = new Int32Array(10);
const v32 = new Uint32Array(7);
let v33 = 253;
[v33,,v21,v22] = v19;
try { v21["abs"](181, v33, v21); } catch (e) {}
v32[f1] = v33;
v29[10];
const v40 = Symbol.iterator;
const o49 = {
    [v40]() {
        let v42 = 10;
        const o48 = {
            next() {
                v42--;
                const v46 = v42 == 0;
                const o47 = {
                    "done": v46,
                    "value": v42,
                };
                return o47;
            },
        };
        return o48;
    },
};
function f51(a52, a53) {
    const o54 = {
        [a53]: a53,
    };
    return o54;
}
new Uint16Array(v33);
new f1([-2.3616640551925634e+307,0.02455573492666774], v14);
const v60 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
([-1e-15,0.786904425348982,1000000000.0])[v60];
for (let i67 = 0;
    (() => {
        for (let i = 0; i < 5; i++) {
            break;
        }
        return i67 < 2;
    })();
    i67++) {
    const v73 = new Function("x");
    v73.name;
}
Function();
