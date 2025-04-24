import VerifyCodeForm from "./_components/verifyCode-form"


export default function VerifyPassword() {
    return (
        <div>
            {/* Title */}
            <h2 className="font-bold text-2xl mb-3">Verify Password</h2>

            {/* Form */}
            <VerifyCodeForm/>
        </div>
    )
}
