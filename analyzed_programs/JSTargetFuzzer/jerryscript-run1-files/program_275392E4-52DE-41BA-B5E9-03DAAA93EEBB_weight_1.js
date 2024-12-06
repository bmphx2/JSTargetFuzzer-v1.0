function f0() {
    const o17 = {
        "d": 1833128657,
        257: 1833128657,
        m(a5, a6) {
            const o7 = {
            };
            new Proxy(this, o7);
            const o12 = {
                "maxByteLength": 1073741824,
            };
            const v14 = new SharedArrayBuffer(5, o12);
            const v16 = new Uint32Array(v14, f0, f0, f0);
            return v16;
        },
    };
    return o17;
}
const v18 = f0();
const v19 = f0();
const v20 = f0();
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v19;
    this.d = a26;
    this.b = a26;
}
const v28 = new F24(v19, "-29685177");
const v29 = new F24(v19, "536870889");
const v30 = new F24(v18, "m");
function f31(a32, a33, a34, a35) {
    const o60 = {
        "h": v30,
        get e() {
            v29[4294967296] = this;
            const v38 = f0(this) * this;
            const v39 = a32 * v18;
            const o40 = {
                [v29]: v39,
            };
            function f41(a42, a43, a44, a45) {
                const o48 = {
                    set g(a47) {
                    },
                    ...a43,
                };
                return o48;
            }
            o40.f /= v38;
            const v49 = super.h;
            try {
                super.assign(F24);
            } catch(e51) {
                new BigInt64Array(v49);
                const v57 = new Int32Array(77);
                function f58() {
                    return 256;
                }
                v57.sort(f58);
            }
            return a35;
        },
    };
    return o60;
}
f31(v20, "-29685177", v29, v28);
f31(v20, "m", v18, v30);
f31(v18, "536870889", v18, v28);
const v65 = Array(Array);
const v66 = v65[268435456];
switch (v66) {
    case v66:
        break;
    case v65:
        break;
}
