import RobotDetails from "@/app/robots/[id]/section/RobotSection"


const Page = async ({ params: { id } }: { params: { id: string } }) => {
    return <div className="flex p-12">
        <RobotDetails id={id} />
    </div>
}

export default Page