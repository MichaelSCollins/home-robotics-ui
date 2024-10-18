import { Robot, RobotTable } from "./table"
import mockRobots from './.fake/robots.json'

const Page = () => {
    return <div className="p-6" style={{
        height: "90svh"}} id="container"><RobotTable robots={mockRobots} /></div>
}

export default Page