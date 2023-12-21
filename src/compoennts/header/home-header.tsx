import { Flex } from "antd"

export default () => {
    return (
        <Flex justify="space-between" align="center" className="w-full p-4 h-[64px]">
            <h1>Logo</h1>
            <a href="/home">Go to Main Site</a>
        </Flex>
    )
}