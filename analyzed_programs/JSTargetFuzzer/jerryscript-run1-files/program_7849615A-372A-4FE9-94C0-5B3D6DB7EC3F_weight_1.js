class C9 {
    constructor(a11, a12, a13) {
        const v14 = this === a13;
        const v16 = Symbol.iterator;
        const o33 = {
            valueOf(a18) {
                super.getOwnPropertyDescriptors(this, a12, a11, a13);
                return a18;
            },
            toString(a21) {
                this[a21 = 43128] = this;
                return this;
            },
            [v16]() {
                let v23 = 10;
                const o32 = {
                    next() {
                        const v25 = v23--;
                        const v27 = v23 == 0;
                        const o31 = {
                            "done": v27,
                            ...v14,
                            valueOf() {
                                this(0, this, 2147483648, this, ...v25);
                                return super.c;
                            },
                            "value": v23,
                        };
                        return o31;
                    },
                };
                return o32;
            },
        };
    }
}
new C9(-16, -42296, 43128);
new C9(43128, 43128, -42296);
new C9(-9223372036854775808, 65537, -9223372036854775808);
[NaN];
[-1e-15,-2.0,0.737465722832199,-1000000.0,-493.92830781524833,-0.0,-1000000000.0,4.0,0.17156768457194693,-662.3994463876222];
[-Infinity,2.175972701968868e+307,1e-15,-704.7844756200124,-4.0,-2.0,-1.7976931348623157e+308];
new Int32Array(64);
new Int32Array(1024);
function F48() {
    if (!new.target) { throw 'must be called with new'; }
}
const o53 = {
    set c(a51) {
        this[F48] = undefined;
    },
};
new Int16Array(1000);
const v56 = [129];
const v57 = [0,-2,-646376397,1855814374,-2,-8,-29428,-3];
[-1194622953,-65536,4294967297,-65535,-112499346,512,9007199254740991,268435440,-1940231846];
v56[Symbol.unscopables];
Math.hypot(17986);
const v67 = v57 || (42942 ** 42942);
Math.sin(17986);
+v67;
