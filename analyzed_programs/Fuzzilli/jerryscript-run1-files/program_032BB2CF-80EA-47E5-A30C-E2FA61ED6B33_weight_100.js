const v0 = [-Infinity,1.7976931348623157e+308,-Infinity,-3.938225897414147e+307,0.4138842538345665,4.4037046874033265e+307,0.9829378622835895];
const v1 = [-3.9200893436822094e+307,-168.9569828734991,-270047.99448222935,-1000000.0,0.3316441012735071,2.220446049250313e-16,1000000000000.0,-1.7976931348623157e+308,-1000000000000.0,0.27504293548427006];
const v2 = [-3.0,-2.220446049250313e-16,-1.5680070852748105e+308,-1.7976931348623157e+308,4.27777558266396,-Infinity];
new WeakSet();
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a13;
    this.c = a13;
}
new F11(v0, v1, v2);
new F11(4, v1, v0);
new F11(WeakSet, v2, v1);
new Array(52);
const v25 = [-664202.4585260709,2.220446049250313e-16,0.38365289829048044,-4.0,1000000000000.0];
const v26 = [-662.1529752041342,-1.6700639233294563e+308,NaN,0.7374796442383599,-1e-15,-1.0];
const v27 = [-1e-15,-5.0,-1.7976931348623157e+308,-2.5209203689549417e+307,-4.689382368512609];
let v28 = 0;
do {
    const v29 = v25 <= 4n;
    const v30 = v29 ? v25 : 4n;
    [v26,v25,v29];
    [v30,[v30,v25],v27,v26];
    v28++;
} while (v28 < 3)
function f37() {
    return v25;
}
function F41() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.a = v28;
}
const v44 = new F41();
const v45 = new F41();
const v46 = new F41();
function f53(a54, a55, a56) {
    const o69 = {
        get g() {
            let v57 = this;
            function F58(a60, a61, a62, a63) {
                if (!new.target) { throw 'must be called with new'; }
                ({"h":v57,} = this);
                a62.__proto__ = v45;
                try { a63(a62); } catch (e) {}
                Object.defineProperty(v46, 3, { writable: true, enumerable: true, get: f53 });
                try { new a54(a62, a55, F41, v46, v44); } catch (e) {}
                this.a = a62;
                this.b = 65536;
            }
            new F58(268435439, 65536, -256, v45);
            new F58(1995520660, v57, 9007199254740992, v44);
            new F58(9007199254740992, F58, 1995520660, a54);
            return v57;
        },
        ...a54,
        "d": a55,
        [a54]: v44,
        3: a56,
    };
    return o69;
}
f53(v44, 268435440, 268435440);
f53(v46, -256, -256);
const v72 = f53(v44, 65536, -256);
const v75 = new BigInt64Array(28);
const v76 = new BigInt64Array(28);
function f77() {
    v72[243.41242208355516] = v76;
    try { v76.filter(f53, v45); } catch (e) {}
    return v76;
}
v75.find(f77);
