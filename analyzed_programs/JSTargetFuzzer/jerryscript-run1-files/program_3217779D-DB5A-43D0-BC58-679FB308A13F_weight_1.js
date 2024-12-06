function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65535;
    this.f = 65535;
}
const v3 = new F0();
const v4 = new F0();
new F0();
[-3.0];
const v10 = [0.5581691067688234];
let v11 = 0;
while (v11 < 5) {
    try { v3.clz32(-59262, v10, v11); } catch (e) {}
    v11++;
}
[NaN,-940.727337336059,1000.0,-3.0,-398.5763275491512,-1000000000.0,-2.220446049250313e-16,0.7169687094202657];
function f20() {
}
function f21() {
    const o33 = {
        get g() {
            new f20();
            return f20;
        },
        "h": f20,
        ...v10,
        "e": -2,
        ...v10,
        "c": 51398,
        [v10]: v3,
        ...f20,
        "g": f20,
        set f(a28) {
            const t33 = -59262;
            t33[this] = v4;
            let v29;
            try { v29 = this.m(-2147483648, -2); } catch (e) {}
            ({"a":v29,} = this);
            [257,536870888];
            [65536,9,1724,37005,-65535,-14,-14,2,4096,5];
            [2147483647,1163760765,58060,37249,470747050,9007199254740991,-1019824430,1,-268435456,256];
            return a28;
        },
        "a": f20,
        ...f20,
    };
    return o33;
}
f21();
const v35 = f21();
const v36 = f21();
let v39 = Int32Array;
let v40 = new v39(4096);
new Uint32Array(129);
let v46 = new Int16Array(512);
[,v39,v46,v40] = v46;
v35.g += 4096;
const v48 = Symbol.iterator;
const o78 = {
    [v48]() {
        let v50 = 10;
        const o77 = {
            next() {
                v50--;
                const v54 = v50 == 0;
                const o58 = {
                    ...F0,
                    "done": v54,
                    "value": v50,
                    ...this,
                    [this]() {
                        try {
                            super.getUint16();
                        } catch(e57) {
                        }
                        return this;
                    },
                };
                return o58;
            },
            p(a60, a61, a62, a63) {
                let v65 = 24794;
                const v67 = v65--;
                [2];
                function F70() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F70();
                +a61;
                v67 - v50;
                -v67;
                v36 ** v36;
                return -651.9212312509067;
            },
        };
        return o77;
    },
};
