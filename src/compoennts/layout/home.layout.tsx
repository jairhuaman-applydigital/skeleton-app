import { Button, Flex } from "antd";
import HomeHeader from "../header/home-header";

export default function HomeLayout() {
    return (
        <>
            <HomeHeader />
            <Flex className="h-[calc(100%_-_96px)] max-w-[600px] px-4 w-full mx-auto" align="center" justify="center" vertical>
                <h2 className="text-4xl font-bold">A Portal</h2>
                <p className="text-center mb-4 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing esse voluptate,
                    rerum doloremque sed, nostrum repudiandae eveniet iste perspiciatis
                    sapiente ex exercitationem?
                </p>
                <Button size="large" type="primary" block>Log In </Button>

                <p className="mt-4">Don't have an account?<a className="ml-2" href="/">Get in Touch</a> </p>
            </Flex>
            <Flex className="h-[24px] flex-wrap" justify="center" align="center" gap={"middle"}>
                <p>Copyright</p>
                <div>
                    <a href="/">PRIVACY POLICY</a>
                    <a href="/"> CODE OF ETHICS AND CONDUCT</a>
                </div>
            </Flex>

        </>
    );
}
