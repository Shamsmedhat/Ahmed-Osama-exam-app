export default function SubmitFeedback({
    className = "",
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {

    if (!children) return null;

    const classes = `flex items-center text-sm gap-2 my-2 text-red-500 font-semibold justify-center ${className}`.trim();

    return (
        <p {...props} className={classes}>
          {children}
        </p>
    );
}