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
[-2.2250738585072014e-308,-4.0,0.495646727171548];
[-4.0,1000000.0,1000.0,-0.0,5.0,0.07144890281966976];
[-116188.41037730407,0.8348354419310321,NaN,1.0156440019700433e+308,NaN,0.7705288792461411];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 14;
}
const v29 = new F25(14, F25);
new F25(2147483649, F25);
new Int16Array(11);
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    const v40 = `
        function F41(a43, a44) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v40);
}
const o55 = {
    [F25](a48) {
        const v49 = (a50, a51, a52) => {
            [-256,8,8,-2,4,-9223372036854775808,1073741824,-2104549809,-128];
            [7,1810206599,-846245225,-9223372036854775807,2023076567,4294967296];
            return this;
        };
    },
};
const v56 = new F25(v29, o55);
function F63(a65, a66) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a65;
}
new F63(-9007199254740992n, 14);
new F63(268435439n, 2147483649);
function f70() {
    return 255;
}
function f71() {
    const o81 = {
        [2147483649](a76, a77) {
            this.h = 841.3044527041452;
            return a77;
        },
        "b": -1.5799674125955281e+308,
        "d": 841.3044527041452,
        "e": 2147483649,
    };
    return o81;
}
new F63(v56, 14);
const v84 = `
    const v87 = new Uint16Array(127);
    with ([1893666078]) {
        function f90(a91, a92, a93) {
            return "Pw50";
        }
        length();
    }
    +[-8.003092533243217,-3.9368150946092832,0.08864211451506177,5.0,1.2523469369214561e+308,-261.4902869993123,2.0,-3.2239364405395804e+307];
    Math.log2();
    const v100 = Symbol.iterator;
    const o109 = {
        [v100]() {
            let v102 = 10;
            const o108 = {
                next() {
                    v102--;
                    const v106 = v102 == 0;
                    const o107 = {
                        "done": v106,
                        "value": v106,
                    };
                    return o107;
                },
            };
            return o108;
        },
    };
    function f110(a111, a112, a113, a114) {
        a113();
        const t98 = 65536n;
        t98[3] = v87;
        const t101 = 65536n;
        t101();
        return 65536n;
    }
    function F117(a119, a120) {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
