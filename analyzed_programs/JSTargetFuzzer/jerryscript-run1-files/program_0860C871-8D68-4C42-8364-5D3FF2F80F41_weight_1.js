function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 20286;
    this.c = 268435441;
}
const v7 = new F3(9, 20286);
new F3(268435441, 9);
const v9 = new F3(268435441, 9);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 268435441;
    this.f = 268435441;
    this.a = 9;
}
const v16 = new F10(268435441, F10, 268435441, 9);
const v17 = new F10(20286, v16, v7, 20286);
const v18 = new F10(268435441, v16, F3, 268435441);
function f19(a20, a21, a22) {
    const o38 = {
        "construct": F10,
        ...a20,
        [a22]() {
        },
        p(a25, a26, a27, a28) {
            (a20 / a20) * a28;
        },
        get f() {
            const v33 = Symbol.species;
            this[v33] = F3;
            try { v33.replace(a22, v18, a22, v16); } catch (e) {}
            for (let v35 = 0; v35 < 32; v35++) {
                v33["p" + v35] = v35;
            }
            return a20;
        },
        "b": F3,
        "e": a20,
        "g": a20,
    };
    return o38;
}
const v39 = f19(v9, v18, v18);
f19(v39, v16, v16);
f19(v39, v17, v18);
new Uint16Array(Uint16Array, Uint16Array);
for (let [i48, i49] = (() => {
        new Uint8Array(v9, F3, F3);
        return [0, 10];
    })();
    i48 < i49;
    i48++) {
}
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const o82 = {
    get prototype() {
        return this;
    },
};
const v93 = new URIError(512);
Array.of;
const o97 = {
};
"p" + ("toString").trimLeft;
const v103 = new Int16Array(447);
new Uint32Array(2438);
function f108(a109, a110) {
}
([8,536870912])["find"](f108);
function f116() {
}
const o124 = {
};
function f125(a126, a127, a128, a129) {
    const o130 = {
        ...a126,
    };
    return a128;
}
new Promise(f125);
v93.description <<= 2006448021;
const v133 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v133.copyWithin(v133, v133));
new Uint8Array(0);
const v143 = [-8,4294967295,148900462];
let v144 = RegExp.bind("2147483647", v143);
const v146 = new BigUint64Array(127);
function f147(a148, a149) {
    const o150 = {
        "f": a148,
        ...v144,
        "e": a149,
    };
    return o150;
}
f147(v144, 26357);
f147(v143, 26357);
f147(v133, 2);
v144 /= v146;
new WeakSet();
class C161 {
    valueOf(a163, a164, a165, a166) {
    }
}
new C161();
new BigInt64Array(2, -14, v103);
([5]).reverse();
