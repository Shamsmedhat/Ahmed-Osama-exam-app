import { getServerSession } from "next-auth";
import QuizesCard from "./_components/quizescard/quizes-card";
import UserCard from "./_components/userdetailscard/userdetails-card";
import { authOptions } from "@/auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    const username = session?.user?.username || ""; 


    return (
        <div className="p-6  pl-0"> 
            

            <div className="flex flex-col gap-y-10 mx-auto">
                <UserCard username={username} />
                <QuizesCard />
            </div>
        </div>
    );
}