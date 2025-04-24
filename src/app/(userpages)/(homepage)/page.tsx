import AppSidebar from '@/components/layout/sidebar'
// import UserCard from '../../dashboard/_components/userdetailscard/userdetails-card'
// import QuizesCard from '../../dashboard/_components/quizescard/quizes-card'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'

export default async function Home() {

  const session = await getServerSession(authOptions)
  console.log(session?.user.fisrtName);

  return (
    <>
      <div className=' '>

      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">hello {session?.user.lastName}</h1>

        <div className="flex flex-col gap-y-10 mx-auto">
          {/* <UserCard />
          <QuizesCard /> */}
        </div>
      </div>

    </>
  )
}
