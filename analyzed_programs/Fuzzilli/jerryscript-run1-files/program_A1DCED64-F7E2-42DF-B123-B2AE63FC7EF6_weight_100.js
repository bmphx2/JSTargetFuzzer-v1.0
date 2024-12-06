[15207.21589472692,164.82196660344175,0.4708745244626251,1000000000.0,-7.3983594021317,-4.0,-119.01626151174298,-926.961376543856];
[-201141.55035373766,0.0,-279327.3746522056];
[-1e-15,-7.833093082548023,-5.0,433584.8750553406,4.0,-5.049955145164377e+307,183.34469925522922,5.0];
new BigUint64Array(6);
new Uint16Array(128);
new Uint8Array(249);
new Array(52);
const v21 = [-664202.4585260709,2.220446049250313e-16,0.38365289829048044,-4.0,1000000000000.0];
const v22 = [-662.1529752041342,-1.6700639233294563e+308,NaN,0.7374796442383599,-1e-15,-1.0];
const v23 = [-1e-15,-5.0,-1.7976931348623157e+308,-2.5209203689549417e+307,-4.689382368512609];
let v24 = 0;
do {
    const v25 = v21 <= 4n;
    const v26 = v25 ? v21 : 4n;
    [v22,v21,v25];
    [v26,[v26,v26],v23,v22];
    v24++;
} while (v24 < 3)
function f33() {
    return v21;
}
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.a = -2147483647;
}
const v40 = new F37();
const v41 = new F37();
const v42 = new F37();
function f49(a50, a51, a52) {
    const o65 = {
        get g() {
            let v53 = this;
            function F54(a56, a57, a58, a59) {
                if (!new.target) { throw 'must be called with new'; }
                ({"h":v53,} = this);
                a52.__proto__ = v41;
                try { a59(a58); } catch (e) {}
                Object.defineProperty(a57, 3, { writable: true, enumerable: true, get: f49 });
                try { new a56(a58, a51, F37, v42, v40); } catch (e) {}
                this.a = a58;
                v41.b = 65536;
            }
            new F54(268435439, 65536, -256, v41);
            new F54(1995520660, v53, 9007199254740992, -112.37934798817048);
            new F54(9007199254740992, F54, 1995520660, a50);
            return 268435440;
        },
        ...a50,
        "d": a51,
        [a50]: v40,
        3: a51,
    };
    return o65;
}
f49(v40, 268435440, 268435440);
f49(v42, -256, -256);
const v68 = f49(F37, 65536, -256);
const v71 = new BigInt64Array(28);
const v72 = new BigInt64Array(28);
function f73() {
    v68[243.41242208355516] = v72;
    try { v72.filter(f49, 268435439); } catch (e) {}
    return v72;
}
v71.find(f73);
