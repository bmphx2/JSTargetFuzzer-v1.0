new Uint16Array(1000);
new Uint8Array(93);
new Int8Array(111);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740991;
    this.b = 9007199254740991;
    this.c = 9007199254740991;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F12;
    this.e = a20;
    this.b = v16;
}
const v22 = new F18(v17, v16);
const v23 = new F18(v17, v22);
new F18(v16, v15);
let v31 = [-2.2250738585072014e-308,-4.0,0.495646727171548];
const v32 = [-4.0,1000000.0,1000.0,-0.0,5.0,0.07144890281966976];
[-116188.41037730407,0.8348354419310321,NaN,1.0156440019700433e+308,NaN,0.7705288792461411];
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 14;
}
const v41 = new F37(14, F37);
const v42 = new F37(2147483649, F37);
const v45 = new Int16Array(11);
function F46(a48, a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    const v52 = `
        function F53(a55, a56) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    v23(v52);
}
let o67 = {
    [F37](a60) {
        const v61 = (a62, a63, a64) => {
            [-256,8,8,-2,4,-9223372036854775808,1073741824,-2104549809,-128];
            [7,1810206599,-846245225,-9223372036854775807,2023076567,4294967296];
            return this;
        };
    },
};
const v68 = new F37(v41, o67);
let v71 = -9007199254740992n;
function F75(a77, a78) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a77;
}
const v79 = new F75(v71, 14);
const v80 = new F75(268435439n, 2147483649);
function f82() {
    return 255;
}
function f83() {
    const o93 = {
        [2147483649](a88, a89) {
            this.h = 841.3044527041452;
            return a89;
        },
        "b": -1.5799674125955281e+308,
        "d": 4096,
        "e": 2147483649,
    };
    return o93;
}
const v94 = new F75(v68, 14);
const v96 = `
    -Infinity;
    o67 = v79;
    for (let v100 = 0; v100 < 32; v100++) {
        v42["p" + v100] = v100;
    }
    const v105 = new Uint16Array(127);
    with ([1893666078]) {
        function f108(a109, a110, a111) {
            return "Pw50";
        }
        const t84 = 127;
        t84();
    }
    +[-8.003092533243217,-3.9368150946092832,0.08864211451506177,5.0,1.2523469369214561e+308,-261.4902869993123,2.0,-3.2239364405395804e+307];
    Math.log2();
    const v118 = Symbol.iterator;
    const o141 = {
        [v118]() {
            let v120 = 10;
            for (let i122 = 0; i122 < 3; i122++) {
                [v31,i122,v71,...i122] = v32;
                v71 = v16;
                const o128 = {
                    "apply": f82,
                    "construct": Symbol,
                    "getOwnPropertyDescriptor": Symbol,
                    "getPrototypeOf": Symbol,
                    "has": f83,
                    "setPrototypeOf": f82,
                };
                new Proxy(Symbol, o128);
            }
            const o140 = {
                next() {
                    v120--;
                    const v134 = v120 == 0;
                    const o135 = {
                        "done": v134,
                        "value": v134,
                        "h": -875089458,
                        [v80]: v45,
                        "g": 4.0,
                        "d": v134,
                        [F46]: v94,
                    };
                    const v136 = [];
                    const o137 = {
                    };
                    const v139 = new Proxy(v136, o137);
                    v139.__proto__ = v139;
                    return v17;
                },
            };
            return o140;
        },
    };
    function f142(a143, a144, a145, a146) {
        a145();
        const t131 = 65536n;
        t131[3] = v105;
        const t134 = 65536n;
        t134();
        return 65536n;
    }
    function F149(a151, a152) {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
