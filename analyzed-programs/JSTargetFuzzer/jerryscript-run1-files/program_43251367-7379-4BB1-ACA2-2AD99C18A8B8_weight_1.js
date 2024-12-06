let v0 = 9007199254740991;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F3(v0);
const v7 = new F3(4);
const v8 = new F3(4);
for (const v9 in v8) {
    const v10 = v7.__proto__;
    v8[v10] = v10;
}
function f14(a15, a16, a17, a18) {
    const o69 = {
        ...v6,
        __proto__: v7,
        p(a20, a21, a22) {
            for (const v23 of a17) {
                v0 >>>= 4;
                function f24(a25) {
                    return a25;
                }
                const v29 = ([2036046200,-9223372036854775807,-61646])["map"](parseInt);
                v7[-2] = a22;
                const v31 = Symbol.iterator;
                this.valueOf = a20;
                const o32 = {
                    "construct": Symbol,
                    "getOwnPropertyDescriptor": f14,
                    "ownKeys": f14,
                };
                new Proxy(v6, o32);
                const o68 = {
                    [v31]() {
                        let v36 = 10;
                        function F37(a39) {
                            if (!new.target) { throw 'must be called with new'; }
                            Symbol();
                        }
                        try {
                            new Promise();
                        } catch(e44) {
                        } finally {
                        }
                        const o67 = {
                            next() {
                                const v46 = v36--;
                                Object.defineProperty(this, "length", { writable: true, value: this });
                                ([2.2250738585072014e-308,8.554280841760367e+307]).values;
                                const v50 = new Uint32Array();
                                1 % v50;
                                const v54 = v36 == 0;
                                let v55;
                                try { v55 = ("map").split(v29, 0); } catch (e) {}
                                const v56 = [9007199254740992,-268435456,10];
                                [1137091587,675571215,4,1781238759,1073741824];
                                const v58 = [737928342,-8,-9223372036854775807,3,-1240217375,1017486430,9223372036854775807];
                                this[v56] = a22;
                                const o66 = {
                                    "done": v54,
                                    [0]: v46,
                                    "value": v36,
                                    __proto__: v58,
                                    536870889: F37,
                                    "a": v55,
                                    get d() {
                                        f24(a20);
                                        return this;
                                    },
                                    [this]: Promise,
                                    [v36]: v36,
                                    get b() {
                                        return 538058585;
                                    },
                                };
                                return o66;
                            },
                        };
                        return o67;
                    },
                };
            }
            return a18;
        },
    };
    return o69;
}
const v70 = f14(v7, 1073741825, F3, v8);
const v72 = [4,4,4,4,4];
const v73 = 4 / v0;
v73 < v72[903];
f14(v6, v0, f14(v8, v0, v70, v7), v70);
("1").trim();
