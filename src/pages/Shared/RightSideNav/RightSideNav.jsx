import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="">
                <h4>Login With</h4>
                <a href="" className="flex gap-1 justify-center items-center border py-1 mt-4">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </a>
                <a href="" className="flex gap-1 justify-center items-center border py-1 mt-2">
                    <FaGithub></FaGithub>
                    Login with Github
                </a>
            </div>
            <div className="mt-8">
                <h4>Find Us On</h4>
                <a href="" className="flex gap-1 items-center border py-2 ">
                    <FaFacebook  className="ml-4"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="flex gap-1 items-center border-x  py-2 ">
                    <FaTwitter className="ml-4"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="flex gap-1 items-center border py-2 ">
                    <FaInstagram className="ml-4"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div></div>
        </div>
    );
};

export default RightSideNav;