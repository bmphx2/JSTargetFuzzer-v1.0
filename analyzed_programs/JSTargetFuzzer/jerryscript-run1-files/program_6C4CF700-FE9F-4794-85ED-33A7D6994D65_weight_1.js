function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10000;
    this.c = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v5];
const v7 = [v6];
const v8 = [v3,v4,F0,v4,v7];
function f12(a13, a14, a15, a16) {
    const o41 = {
        "g": a14,
        ...a16,
        toString(a18, a19, a20) {
            const v22 = a20 || a13.f;
            super.h = a13;
            const v24 = new Date();
            new Uint32Array(v24);
            let v28;
            try { v28 = a13["toString"]("toString", v3, "toString", 536870912, v4); } catch (e) {}
            let [,...v29] = v28;
            function* f30(a31, a32) {
                v22 >>> a31;
                [268435456,367492426,3,-1262861246,-256,255,65537,2028827475,65535,44367];
                [1073741824,1073741825,9223372036854775807];
                const v36 = [-1024,-22054,-43809,-650388627,-12,5];
                yield* 1073741824;
                return v36;
            }
            f30(v29, f30);
            return a20;
        },
    };
    return o41;
}
const v42 = f12(v3, v7, v4, v4);
const v43 = f12(v5, v8, v3, v7);
f12(v3, v6, v5, v43);
class C48 {
    set e(a50) {
        const o51 = {
            "d": "c",
            "b": v43,
            "e": v8,
            "f": F0,
            4: this,
            "a": v8,
            "a": "h",
            "c": this,
            ..."c",
        };
        try { a50.getDate(this, "h", "c", o51); } catch (e) {}
    }
    get f() {
        const o66 = {
            valueOf() {
                536870912 >>> 1073741824;
                const t58 = "-256";
                t58[1000] = v8;
                ("h")["trimEnd"](this, C48, ..."trimEnd", v42, ..."trimEnd");
                this[this] = this;
                try { C48(v8, 536870912); } catch (e) {}
                -this;
                return "h";
            },
        };
        return this;
    }
}
new C48();
new C48();
new C48();
new Float32Array(1);
new Int32Array(3296);
const v81 = new Float32Array(10);
function f82() {
    return v81;
}
let v83 = 10;
for (; v83--;) {
    1073741824n instanceof Float32Array;
    v81.f = "-256";
}
