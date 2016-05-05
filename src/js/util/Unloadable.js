class Unloadable {
    constructor(props) {
        const self = this;

        this.controller = () => {
            return {
                onunload: self.onUnload || (() => {}),
            }
        };
    }
}

export default Unloadable;