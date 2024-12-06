Symbol.toPrimitive;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v9 = new F5();
const v11 = new Map();
function f12() {
    return v9;
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
new F13(f12, v9, v11, Map);
function f21() {
    const o27 = {
        "e": 1e-15,
        p(a25, a26) {
            return f21;
        },
        "f": 41151,
    };
    return o27;
}
let v28 = f21();
const v29 = f21();
let v30 = f21();
function F31(a33) {
    if (!new.target) { throw 'must be called with new'; }
}
const v34 = new F31(v28);
let o45 = {
    ...v29,
    set f(a36) {
        function f37(a38, a39) {
            try { a36(a39, a36, f12, this, a39); } catch (e) {}
            const o41 = {
                "apply": f12,
                "construct": f12,
                "defineProperty": Symbol,
            };
            new Proxy(a38, o41);
            return Symbol;
        }
        f37(v29, v30);
        ({"a":v30,"b":v28,} = v34);
    },
};
const v48 = new f12([6,17590]);
new Uint8Array(v48);
const v52 = new Uint16Array();
let {...v53} = v52;
new Float32Array(1024);
new Uint16Array(255);
new BigUint64Array(3);
let v66 = (-1.2674617751848058e+308) ** o45;
const v67 = --v66;
let v68 = ++o45;
Math.log2(v67);
v68++;
~v66;
v66 ** o45;
new Boolean(2);
class C75 {
    constructor(a77) {
        const v78 = /D(?:a+)*/gyisum;
        v78.exec(v78);
        try { new C75(a77, C75, this, C75, C75); } catch (e) {}
    }
}
new C75(C75);
[1000000000.0,4.689098511580115e+307,-1.0,1.0,1000.0,2.0,0.7791932702632264];
[-4.0,5.692494320076769,45396.49122432072,0.016733225885073644,NaN,-864.8672298974623,-1e-15,1000.0,3.1520868433301063e+307,894.4938781848814];
const o85 = {
    valueOf() {
        C75 = Uint16Array;
        return -3976;
    },
};
[0.09705085680124426,-8.567905141483755e+307,-411633.4917953926,1.1541665015993814e+308,0.0,-78.34579949659678,-1000000000.0];
try { ("delete").repeat(2006448021); } catch (e) {}
