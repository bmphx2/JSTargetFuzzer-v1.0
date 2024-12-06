function F15() {
    if (!new.target) { throw 'must be called with new'; }
}
class C17 extends F15 {
    constructor(a19, a20, a21) {
        super();
        this.__proto__ = F15;
    }
}
new C17(F15, F15, C17);
