let v7 = -9223372036854775808;
function f9(a10, a11, a12, a13) {
    const o37 = {
        n(a15, a16, a17, a18) {
            try { new a16(a17); } catch (e) {}
            return a15;
        },
        [256](a21, a22, a23, a24) {
            function F25(a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v7;
                this.e = a10;
                try { (-65535).resolve(); } catch (e) {}
                typeof a11;
                a13 === "bigint";
                v7++;
                this.g = a28;
            }
            new F25(F25, 256);
            new F25(a21, a22);
            new F25(4294967297, a12);
            return 9;
        },
    };
    return o37;
}
f9(-65535, -2078757129, -65535, f9(256, f9(f9, v7, 9, 65535), 4294967297, 65535));
const v43 = new BigInt64Array(64);
const v44 = [v43];
try { v44.toLocaleString(v43, v44); } catch (e) {}
