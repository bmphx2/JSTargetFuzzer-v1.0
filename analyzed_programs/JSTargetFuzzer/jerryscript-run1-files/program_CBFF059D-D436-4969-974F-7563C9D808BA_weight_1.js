const v3 = [-56406];
const v4 = [v3,-16326,-16326];
const v5 = [-16326];
function f6(a7, a8, a9, a10) {
    const o23 = {
        [-56406]: a7,
        [a8]: a9,
        "g": -16326,
        get b() {
            a10 = a8;
            const v13 = Symbol.iterator;
            const o22 = {
                [v13]() {
                    let v15 = 10;
                    const o21 = {
                        next() {
                            v15--;
                            const v19 = v15 == 0;
                            const o20 = {
                                "done": v19,
                                "value": v15,
                            };
                            return o20;
                        },
                    };
                    return o21;
                },
            };
            return a9;
        },
    };
    return o23;
}
f6(-16326, -56406, v3, v5);
f6(-56406, -16326, v5, f6(-16326, -16326, -56406, v4));
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a29;
    this.b = v5;
}
new F27(-56406, 1073741823);
new F27(-56406, -16326);
new F27(1073741823, 1073741823);
let v35 = 44256;
new Uint8ClampedArray(255);
const v42 = new Uint32Array(858);
const v45 = [-1000000.0,535179.2230165782,-2.2250738585072014e-308,-730.4166423777232,-0.0,1000000.0];
v45.includes(v45, v45);
("bkq").localeCompare("b");
const v50 = new Uint16Array(7);
function f51(a52, a53, a54, a55) {
    const o70 = {
        m(a57, a58, a59) {
            v35 ^= a59;
            [-5.0,0.6176320614789462,2.4796066441118434,1.8010887102075852,-1.0,-4.0,-3.0,1.0];
            [-2.660624983254484e+307,4.0,-6.224343469236721e+307,-1.7976931348623157e+308,-7.781808913468946e+307,-569211.3075469795,-316.07372880244884,-847553.4946799515];
            [169.64171117192063,-609574.235028561,-9.613757066389756,758172.407755943,1.2851649532322922e+308,-7.705740903077952e+306,5.0,323000.4456514192,-575157.0949599417];
            this instanceof Uint16Array;
            return Uint16Array;
        },
        set f(a65) {
            v50[this] = a54;
            let v66;
            try { v66 = this.m(-4096, 7); } catch (e) {}
            ({"a":v66,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a65;
        },
    };
    function F71() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = -536870912;
        for (const v74 in this) {
            v74.search();
        }
    }
    return o70;
}
const o76 = {
};
String();
new Float32Array();
const v81 = f51(858, 255, 255, v35);
const v82 = f51(-4096, 255, 858, v50);
f51(255, 255, -4096, 255);
v81[8] |= 7;
for (const v84 in v42) {
    const v86 = [v84,f51,255];
    Reflect.apply(v82.m, v50, v86);
    function f89() {
        return v84;
    }
}
