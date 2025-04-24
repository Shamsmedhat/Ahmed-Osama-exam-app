import Image from 'next/image'
import authPic from '../../../../public/assets/images/bro.png'
export default function AuthenticationLeftSection() {
    return (
            <section className="bg-[#F0F4FC] pt-16 pl-16 drop-shadow-md w-[640px] h-screen rounded-r-[100px]">
                {/* header */}
                <div className="max-w-md ">
                    <h1 className="text-5xl font-bold text-black">Welcome To <span className="text-main block py-3">Elevate</span></h1>
                    <p className="text-lg text-black py-6">Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
                </div>

                {/* Image */}
                <Image
                    src={authPic}
                    alt={"Picture of Authentication"}
                    width={350}
                    height={400}
                />
            </section>
    );
}
