function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740991;
    this.b = 9007199254740991;
    this.c = 9007199254740991;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F0;
    this.e = a8;
    this.b = v4;
}
const v10 = new F6(v5, v4);
const v11 = new F6(v5, v10);
new F6(v4, v11);
let v19 = [-2.2250738585072014e-308,-4.0,0.495646727171548];
const v20 = [-4.0,1000000.0,1000.0,-0.0,5.0,0.07144890281966976];
[-116188.41037730407,0.8348354419310321,NaN,1.0156440019700433e+308,NaN,0.7705288792461411];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 14;
}
const v29 = new F25(14, F25);
const v30 = new F25(2147483649, F25);
const v33 = new Int16Array(11);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    const v40 = `
        function F41(a43, a44) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    v11(v40);
}
let o55 = {
    [F25](a48) {
        const v49 = (a50, a51, a52) => {
            [-256,8,8,-2,4,-9223372036854775808,1073741824,-2104549809,-128];
            [7,1810206599,-846245225,-9223372036854775807,2023076567,4294967296];
            return this;
        };
    },
};
const v56 = new F25(v29, o55);
let v59 = -9007199254740992n;
function F63(a65, a66) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a65;
}
const v67 = new F63(v59, 14);
const v68 = new F63(268435439n, 2147483649);
function f70() {
    let v72 = 268435441;
    v4 + v72;
    let v74 = v72--;
    Math.acos(v74);
    ++v74;
    ++v74;
    return 255;
}
function f78() {
    const o88 = {
        [2147483649](a83, a84) {
            this.h = 841.3044527041452;
            return a84;
        },
        "b": -1.5799674125955281e+308,
        "d": 841.3044527041452,
        "e": 2147483649,
    };
    return o88;
}
const v89 = new F63(v56, 14);
const v91 = `
    -Infinity;
    o55 = v67;
    for (let v95 = 0; v95 < 32; v95++) {
        v30["p" + v95] = v95;
    }
    const v100 = new Uint16Array(127);
    with ([1893666078]) {
        function f103(a104, a105, a106) {
            return "Pw50";
        }
        length();
    }
    +[-8.003092533243217,-3.9368150946092832,0.08864211451506177,5.0,1.2523469369214561e+308,-261.4902869993123,2.0,-3.2239364405395804e+307];
    Math.log2();
    const v113 = Symbol.iterator;
    const o132 = {
        [v113]() {
            let v115 = 10;
            for (let i117 = 0; i117 < 3; i117++) {
                [v19,i117,v59,...i117] = v20;
                v59 = v4;
                const o123 = {
                    "apply": f70,
                    "construct": Symbol,
                    "getOwnPropertyDescriptor": Symbol,
                    "getPrototypeOf": Symbol,
                    "has": f78,
                    "setPrototypeOf": f70,
                };
                new Proxy(Symbol, o123);
            }
            const o131 = {
                next() {
                    v115--;
                    const v129 = v115 == 0;
                    const o130 = {
                        "done": v129,
                        "value": v129,
                        "h": -875089458,
                        [v68]: v33,
                        "g": 4.0,
                        "d": v129,
                        [F34]: v89,
                    };
                    return o130;
                },
            };
            return o131;
        },
    };
    function f133(a134, a135, a136, a137) {
        a136();
        const t128 = 65536n;
        t128[3] = v100;
        const t131 = 65536n;
        t131();
        return 65536n;
    }
    function F140(a142, a143) {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
