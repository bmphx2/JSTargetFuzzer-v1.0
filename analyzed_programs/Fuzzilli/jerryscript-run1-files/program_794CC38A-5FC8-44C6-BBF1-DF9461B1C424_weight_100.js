function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9;
    this.f = 9;
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        this.d = 60457;
        this.h = 60457;
        this.g = 60457;
    }
    new F3();
}
const v7 = new F0();
const v8 = new F0();
const v9 = new F0();
function f10(a11, a12) {
    const o24 = {
        [F0]: v7,
        ...a11,
        "d": v7,
        "a": v7,
        get f() {
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = null;
                this.b = a11;
                this.a = a12;
            }
            new F15(v9, v9, a12, F0);
            new F15(v7, v7, a11, null);
            new F15(v7, v9, a12, a11);
            return F0;
        },
    };
    return o24;
}
const v25 = f10(f10, v7);
const v26 = f10(v25, v8);
let v27 = 10;
const o33 = {
    next() {
        v27--;
        const v31 = v27 == 0;
        const o32 = {
            "done": v31,
            "value": v27,
        };
        return o32;
    },
};
f10(v26, v7);
const v36 = new WeakSet();
function f37(a38, a39, a40) {
    const o51 = {
        ...v25,
        "f": a40,
        "a": a40,
        10: v26,
        "h": a39,
        [a39]: v27,
        "MIN_SAFE_INTEGER": a39,
        [a38](a42, a43) {
            a39.__proto__;
            const v45 = v27[8];
            a42["charCodeAt"](a39);
            let v48;
            try { v48 = new a43(a40, "charCodeAt", v27, v36, v45); } catch (e) {}
            return v48;
        },
        get g() {
            for (let v50 = 0; v50 < 9; v50++) {
                v9[43] /= v50;
            }
            return this;
            v7.valueOf = f10;
            return a38;
        },
    };
    return o51;
}
f37(v9, F0, v26);
f37(v9, f37(v36, f37, v26), v26);
const v62 = new Int32Array(v27);
class C64 {
    2092 = v27;
    set g(a66) {
        typeof Float32Array;
    }
    toString(a69, a70, a71, a72) {
        v62[Symbol.unscopables];
    }
}
[-15602,10910,16,4096];
const v83 = [16,2,-1,65537,6];
[9007199254740991,-39319];
const v86 = [536870912];
const v87 = [55330,9223372036854775807,29585,42050,1175240318,-8,1073741823,5];
const v88 = [-2147483649,13,-941206072];
function F89(a91) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v88;
}
new F89(v87);
new F89(v87);
new F89(v83);
function F95(a97, a98, a99) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v86;
    this.g = null;
}
new F95(v86, v86, v88);
new F95(v88, v87, v88);
new F95(v87, v88, v88);
let v103 = 10;
v103--;
class C105 {
    constructor(a107, a108) {
    }
    /*
    constructor(a110, a111, a112) {
        let v113 = delete this[this];
        v113 /= v113;
    }
    */
}
const v117 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v118 = [-14,-4,-14,1073741824,255,557854513];
const v119 = [1694320064,1195474237,-22462];
const v120 = [v117,v119,null,F95,256];
const v121 = [v87];
const v122 = [v121];
function f123(a124, a125, a126, a127) {
    const o175 = {
        __proto__: v118,
        "d": v121,
        toString(a129, a130, a131) {
            const v133 = v122[a130](F89, v119);
            new Int8Array(1000);
            function f143(a144, a145, a146) {
                const o162 = {
                    set h(a148) {
                        const v149 = a146 + -15590;
                        function F153(a155, a156, a157, a158) {
                            if (!new.target) { throw 'must be called with new'; }
                            a145.e = -965536778;
                            this.d = 9007199254740992;
                            this.b = a156;
                        }
                        new F153(769554.987489382, a148, -3.0, a146);
                        new F153(2004776999, 769554.987489382, 769554.987489382, -15590);
                        new F153(-3.0, -3.0, 769554.987489382, v149);
                    },
                };
                return o162;
            }
            f143(-9007199254740990, -965536778, 536870889);
            const v165 = Symbol.iterator;
            const o174 = {
                [v165]() {
                    let v167 = 10;
                    const o173 = {
                        next() {
                            v167--;
                            a124 == 12;
                            const o172 = {
                                "hasInstance": v133,
                                "value": v167,
                            };
                            return o172;
                        },
                    };
                    return v133;
                },
            };
            return a129;
        },
    };
    return o175;
}
const v176 = f123(v122, v120, v121, v117);
const v177 = f123(v122, v120, v118, v121);
f123(v121, v122, v119, v117);
function F179(a181, a182) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = this;
}
new F179(v122, v176);
const v184 = new F179(v88, v177);
const v185 = new F179(v122, v177);
for (let v186 = 0; v186 < 81; v186++) {
    const v189 = [v25,v25,256,v25];
    let v190;
    try { v190 = Uint32Array(256, 256, v189); } catch (e) {}
    v190 = Uint32Array;
    break;
    Object.defineProperty(v184, v177, { writable: true, configurable: true, value: v185 });
    v86.length;
    break;
}
v118 instanceof f123;
