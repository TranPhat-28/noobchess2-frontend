import { FaChessKing } from "react-icons/fa6";
import FacebookLoginButton from "../../components/FacebookLoginButton";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import useGlobalModal from "../../hooks/GlobalModalHandler";

const LoginPage = () => {
    const { openGlobalModal } = useGlobalModal();

    return (
        <div className="custom-bg h-full w-full object-fill flex items-center justify-center p-6">
            <div className="bg-base-100 p-4 flex flex-col items-center rounded-lg w-full max-w-lg shadow-md">
                <img src="/icon512.png" alt="logo" className="w-28 mt-4" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-0">
                    Welcome to Noob Chess
                </h1>
                <p>The chess platform made by noob</p>

                <h2 className="mt-10 p-2">Login to save your progress</h2>
                <div className="w-full max-w-xs flex flex-col">
                    <div className="w-full flex justify-center gap-2">
                        <GoogleLoginButton />
                        <FacebookLoginButton />
                    </div>

                    <div className="divider">OR</div>

                    <button
                        className="btn btn-primary h-20"
                        onClick={() =>
                            openGlobalModal({
                                title: "You are not logged in",
                                content:
                                    "Quickplay progress will not be saved. Continue?",
                                onConfirmNavigate: "/quickplay",
                                showCancelButton: true,
                            })
                        }
                    >
                        <FaChessKing />
                        Play a quick game
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
