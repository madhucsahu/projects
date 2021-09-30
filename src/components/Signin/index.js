import Button from '../forms/Button';
import './styles.scss'

const SignIn=props=>{
    return(
        <div className="signin">
        <div className="wrap">
            <h2>signin</h2>

            <div className="formWrap">
                <form>
                    <div className="socialSignin">
                        <div className="row">
                            <Button>
                              LogIn with Google
                            </Button>
                        </div>
                        <div className="row">
                            <Button>
                              LogIn with Facebook
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}
export default SignIn;