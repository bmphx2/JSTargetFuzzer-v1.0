function f3(a4) {
    const o20 = {
        __proto__: -37299,
        [-65535](a6, a7) {
            try {
                super.p(a4, a7, this, this, a6);
            } catch(e9) {
            }
            return a4;
        },
        valueOf(a11, a12) {
            Math.min(1073741825);
            Math.fround(this);
            Math.trunc(this);
            --a4;
            return Math.floor(a4);
        },
        "g": a4,
        [10000]: a4,
        "e": a4,
    };
    return o20;
}
const v21 = f3(-65535);
f3(-37299);
const v23 = f3(-65535);
v23[f3] = -37299;
let v26 = 9;
let v29 = 310752589;
if (v26) {
    ({"PI":v29,"c":v26,"h":v26,} = Math);
} else {
    const o30 = {
        "apply": f3,
        "call": f3,
        "deleteProperty": f3,
        "ownKeys": f3,
        "setPrototypeOf": f3,
    };
    new Proxy(Math, o30);
}
Math.log(-16);
const v35 = Math.hypot(-16);
Math.log(10000);
Math.pow(10000, -16);
~-3.8798175350971036;
function f39() {
    const v41 = Symbol.iterator;
    const o50 = {
        [v41]() {
            let v43 = 10;
            const o49 = {
                next() {
                    v43--;
                    const v47 = v43 == 0;
                    const o48 = {
                        "done": v47,
                        "value": v43,
                    };
                    return o48;
                },
            };
            return o49;
        },
    };
    return v21;
}
let v53 = 0;
while (v53 < 0) {
    Math.log1p(8);
    Math.cosh(v53--);
    Math.imul(v53, v53 | 8);
    v53++;
}
new BigUint64Array(3);
new Float64Array(12, v35, v23);
new BigUint64Array(2455);
function f72(a73, a74) {
    const o75 = {
    };
    return o75;
}
([8,536870912])["find"](f72, "find");
