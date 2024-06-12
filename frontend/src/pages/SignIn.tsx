
import { Login } from "../components/Input";
import { Message } from "../components/Message";


export function SignIn() {

    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <Login type="signin" />
        </div>
        <div className="hidden lg:block">
            <Message />
        </div>
    </div>
}