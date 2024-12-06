const v3 = [268435456,268435456,268435456];
const v4 = [v3,v3,v3];
const v5 = [65536,65536,-9223372036854775807,v4];
function f12() {
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = 65536;
    }
    const v18 = new F14(65536, -9007199254740990);
    new F14(v18, 4294967295);
    new F14(v5, 65536);
    return arguments;
}
f12(-9223372036854775807, 1073741824, v4, 65536);
