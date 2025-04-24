import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Clock, CheckCircle, Flag } from "lucide-react";

type UserCardProps = {
    username: string;
};

export default function UserCard({ username }: UserCardProps) {
    return (
        <Card className="shadow-md rounded-2xl block bg-white w-full max-h-56"> 
            <CardContent className="flex items-center py-6 gap-10"> 
                {/* Avatar Image */}
                <Avatar className="w-[180px] h-[180px] rounded-none"> 
                    <AvatarImage
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="avatar image"
                        className="object-cover w-full h-full"
                    />
                </Avatar>

                {/* Info Section */}
                <div className="flex-1 max-w-2xl">
                    <h2 className="text-2xl font-bold text-main pb-4">{username}</h2>
                    <p className="text-gray-400 text-sm mb-2">Voluptatem aut</p>

                    {/* Progress Bar */}
                    <Progress value={70} className="h-3 bg-gray-100 [&>div]:bg-main my-6 w-auto max-w-xl" /> {/* Increased max-w from lg to xl, reduced my from 10 to 6 */}

                    {/* Stats */}
                    <div className="flex gap-x-6 mt-4 text-left">
                        {/* Quiz Passed */}
                        <div className="flex items-start gap-2">
                            <div className="bg-white p-2 rounded-lg shadow-md">
                                <Flag className="text-blue-600" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-semibold">27</span>
                                <span className="text-sm text-gray-500">Quiz Passed</span>
                            </div>
                        </div>

                        {/* Fastest Time */}
                        <div className="flex items-start gap-2">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <Clock className="text-blue-600" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-semibold">13 min</span>
                                <span className="text-sm text-gray-500">Fastest Time</span>
                            </div>
                        </div>

                        {/* Correct Answers */}
                        <div className="flex items-start gap-2">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                                <CheckCircle className="text-blue-600" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-semibold">200</span>
                                <span className="text-sm text-gray-500">Correct Answers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}