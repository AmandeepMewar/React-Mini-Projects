export default function Form() {
    return (
        <form action="" className="modal--form">
            <div className="input--field">
                <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    required
                />
            </div>
            <div className="input--field">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="input--field">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit" className="btn btn--submit">
                Submit
            </button>
        </form>
    );
}
