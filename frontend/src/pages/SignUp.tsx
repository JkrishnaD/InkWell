import { Login } from "../components/Input";
import { Message } from "../components/Message";

export function SignUp (){
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
            <Message />
        </div>
        <div>
            <Login type="signup"/>
        </div>
    </div>
}