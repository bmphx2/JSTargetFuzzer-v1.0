class C1 {
    static [true] = true;
    5 = true;
    h = true;
    static h = true;
    constructor() {
        this.h = this;
        typeof this === "object";
        this[536870887];
    }
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
function f18() {
    return v8;
}
class C19 extends f18 {
    constructor(a21, a22) {
        super();
        switch (a21) {
            default:
                new f18();
                break;
            case f18:
                v7[v9] = a22;
                break;
            /*
            default:
                function f24() {
                    return f24;
                }
                class C26 extends Array {
                }
                const v27 = new C26();
                function f28(a29, a30, a31, a32) {
                    return f24;
                }
                f28(Set, v27, -16, this);
                break;
            */
        }
    }
}
new C19(-16, f18);
