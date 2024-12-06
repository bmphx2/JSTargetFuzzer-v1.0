new Array(52);
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
const v17 = [-664202.4585260709,2.220446049250313e-16,0.38365289829048044,-4.0,1000000000000.0];
const v18 = [-662.1529752041342,-1.6700639233294563e+308,NaN,0.7374796442383599,-1e-15,-1.0];
const v19 = [-1e-15,-5.0,-1.7976931348623157e+308,-2.5209203689549417e+307,-4.689382368512609];
let v20 = 0;
do {
    const v21 = v17 <= 4n;
    const v22 = v21 ? v17 : 4n;
    [v18,v17,v21];
    [v22,[v22,v22],v19,v18];
    v20++;
} while (v20 < 3)
function f29() {
    const v31 = Symbol.species;
    for (let v32 = 0; v32 < 32; v32++) {
        v31["p" + v32] = v32;
    }
    return v17;
}
new BigUint64Array(467);
const v42 = new Float32Array(10);
const v45 = new Int32Array(255);
v42.__proto__ = v45;
function F47() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    const v50 = [536870912,-4294967297,432518525,257,9007199254740992,-49754,-20406,41367,1,-2103098535];
    Array(4096);
    try { v50.filter(Array); } catch (e) {}
    this.a = -2147483647;
}
const v55 = new F47();
const v56 = new F47();
const v57 = new F47();
function f64(a65, a66, a67) {
    const o80 = {
        get g() {
            let v68 = this;
            function F69(a71, a72, a73, a74) {
                if (!new.target) { throw 'must be called with new'; }
                ({"h":v68,} = this);
                a73.__proto__ = v56;
                try { a74(a73); } catch (e) {}
                Object.defineProperty(a72, 3, { writable: true, enumerable: true, get: f64 });
                try { new a65(a73, a66, F47, v57, v55); } catch (e) {}
                this.a = a73;
                v56.b = 65536;
            }
            new F69(268435439, 65536, -256, v56);
            new F69(1995520660, v68, 9007199254740992, -112.37934798817048);
            new F69(9007199254740992, F69, 1995520660, a65);
            return 268435440;
        },
        ...a65,
        "d": a66,
        [a65]: v55,
        3: a66,
    };
    return o80;
}
f64(v55, 268435440, 268435440);
f64(v57, -256, -256);
function F83(a85, a86, a87, a88) {
    if (!new.target) { throw 'must be called with new'; }
}
let v89 = [-1658616837,-4294967296,2147483648,-221122270,-9007199254740990,-65536,234770389,2,65537];
const v90 = [-4,-602924107,21454,10,-8,4096,-9007199254740991,-1011406582,268435439];
const v91 = [-612,-633401951];
function f92(a93) {
    const o99 = {
        "prototype": a93,
        "h": f92,
        ...a93,
        "g": a93,
        __proto__: v89,
        "e": v89,
        "f": v90,
        p(a95) {
            const v96 = v91 in v89;
            a93 >>>= a93;
            v89 = v91["every"](v96, a95);
            this[6] -= a93;
            return this;
        },
    };
    return o99;
}
f92(f92(v90), v90);
const v102 = f64(F47, 65536, -256);
function F107(a109, a110) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a110;
    this.h = -15541;
    this.d = a109;
}
const v111 = new F107(-15541, 0.9559399851186979);
const o112 = {
};
const v114 = new Proxy(v111, o112);
for (let v115 = 0; v115 < 32; v115++) {
    "p" + v115;
    v114[1124] = v115;
}
const v119 = new BigInt64Array(28);
const v120 = new BigInt64Array(28);
function f121() {
    v102[243.41242208355516] = v120;
    try { v120.filter(f64, 268435439); } catch (e) {}
    return v120;
}
for (let i127 = 0; i127 < 7; i127++) {
    function f133() {
        return i127;
    }
}
v119.find(f121);
