const v5 = new Int8Array(3098);
const v8 = new Float32Array(256);
const v11 = new Float32Array(128);
function f12(a13, a14, a15, a16) {
    const o37 = {
        "d": a14,
        p(a18, a19) {
            let v20;
            try { v20 = a14(); } catch (e) {}
            const v21 = Int8Array == v20;
            try { v20(v21, this, Float32Array, v21); } catch (e) {}
            return this;
        },
        [128](a24, a25, a26, a27) {
            a24 += a16;
            v11.toString = a25;
            const v28 = v11.byteLength;
            function F29(a31, a32, a33) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a31;
                this.g = v28;
                this.c = 3098;
            }
            new F29(a16, 9007199254740992, v11);
            new F29(a25, a13, v5);
            const v36 = new F29(a26, a15, a14);
            return v36;
        },
    };
    return o37;
}
const v38 = f12(128, f12, 3098, 256);
f12(-24982, v38, -56859, 3098);
const v40 = f12(3098, 3098, -56859, 9007199254740992);
let v42;
try { v42 = v38.p(3098); } catch (e) {}
for (const v46 in v8) {
    const v47 = URIError(v46);
    let v48;
    try { v48 = v42(v47, v5, Int8Array, v40, v47); } catch (e) {}
    v38 & v48;
}
